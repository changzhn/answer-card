import React from 'react';
import styles from './index.css';
import Page from '../components/Page';
import { connect } from 'dva';
import { ICardData } from '@/models/cardData';
import question2page from '@/tools/question2page';
import PageClass from '@/tools/QuestionClasses/PageClass';
import IModelState from '@/types/IModelState';

interface IProps {
  cardData: ICardData;
}

interface IState {
  pages: PageClass[];
}

class AnswerCardMain extends React.Component<IProps, IState> {

  static getDerivedStateFromProps(nextProps: IProps) {
    const { cardData } = nextProps;
    const pages = question2page(cardData, cardData.paperType);
    return { pages };
  }

  public state = {
    pages: [],
  }

  public componentDidMount() {
    const { cardData } = this.props;
    const pages = question2page(cardData, cardData.paperType);
    this.setState({ pages });
  }

  public render() {
    const { cardData } = this.props;
    const pages: PageClass[] = this.state.pages;
    console.log(pages)
    return (
      <div className={styles.appWrapper}>
        <div className={styles.pagesWrapper}>
          {
            pages.map(page => (
              <Page
                cardData={cardData}
                key={page.pageNo}
                page={page}
                totalPage={pages.length}
              />
            ))
          }
        </div>
      </div>
    )
  }
}

export default connect((state: IModelState) => ({
  cardData: state.cardData,
}))(
  AnswerCardMain
)
