import React from 'react';
import styles from './index.css';
import Page from '../components/Page';
import { connect } from 'dva';
import { IGlobalState } from '@/models/global';
import { ICardData } from '@/models/cardData';
import question2page from '@/tools/question2page';
import PageClass from '@/tools/QuestionClasses/PageClass';
import IModelState from '@/types/IModelState';

interface IProps {
  global: IGlobalState;
  cardData: ICardData;
}

interface IState {
  pages: PageClass[];
}

class AnswerCardMain extends React.Component<IProps, IState> {

  static getDerivedStateFromProps(nextProps: IProps) {
    const { global, cardData } = nextProps;
    const pages = question2page(cardData, global.paperType);
    return { pages };
  }

  public state = {
    pages: [],
  }

  public componentDidMount() {
    const { global, cardData } = this.props;
    const pages = question2page(cardData, global.paperType);
    this.setState({ pages });
  }

  public render() {
    const { global, cardData } = this.props;
    const pages: PageClass[] = this.state.pages;
    return (
      <div className={styles.appWrapper}>
        <div className={styles.pagesWrapper}>
          {
            pages.map(page => (
              <Page
                key={page.pageNo}
                global={global}
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
  global: state.global,
  cardData: state.cardData,
}))(
  AnswerCardMain
)
