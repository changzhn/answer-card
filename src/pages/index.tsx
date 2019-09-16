import React from 'react';
import styles from './index.css';
import Page from '../components/Page';
import SvgPage from '../components/SvgShape/Page';
import { connect } from 'dva';
import question2page from '@/tools/question2page';
import PageClass from '@/tools/QuestionClasses/PageClass';
import IModelState from '@/types/IModelState';
import { ICardType } from '@/types/interface';


interface IProps {
  cardData: ICardType;
}

interface IState {
  pages: PageClass[];
}

class AnswerCardMain extends React.Component<IProps, IState> {

  static getDerivedStateFromProps(nextProps: IProps) {
    const { cardData } = nextProps;
    const pages = question2page(cardData);
    return { pages };
  }

  public state = {
    pages: [],
  }

  public componentDidMount() {
    const { cardData } = this.props;
    const pages = question2page(cardData);
    this.setState({ pages });
  }

  public render() {
    const { cardData } = this.props;
    const pages: PageClass[] = this.state.pages;
    // console.log(pages)
    return (
      <div className={styles.appWrapper}>
        <div className={styles.pagesWrapper}>
          {
            pages.map(page => (
              <SvgPage
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
