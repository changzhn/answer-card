import React from 'react';
import styles from './index.css';
import Page from '../components/Page';
import { connect } from 'dva';
import { IGlobalState } from '@/models/global';
import { ICardData } from '@/models/cardData';
import question2page from '@/tools/question2page';
import PageClass from '@/tools/QuestionClasses/PageClass';

interface IProps {
  global: IGlobalState;
  cardData: ICardData;
}

interface IState {
  pages: Array<PageClass>;
}

@connect(({ global, cardData }) => ({
  global,
  cardData,
}))
export default class AnswerCardMain extends React.Component<IProps, IState> {

  static getDerivedStateFromProps(nextProps, prevState) {
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
    const { pages } = this.state;
    return (
      <div className={styles.appWrapper}>
        <div className={styles.pagesWrapper}>
          {
            // tslint:disable-next-line:jsx-no-multiline-js
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
