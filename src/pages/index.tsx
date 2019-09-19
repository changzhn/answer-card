import React from 'react';
import styles from './index.css';
import SvgPage, { IPageProp } from '../components/Page';
import { connect } from 'dva';
import question2page from '@/tools/question2page';
import PageClass from '@/tools/QuestionClasses/PageClass';
import IModelState from '@/types/IModelState';
import { ICardType } from '@/types/interface';
import _ from 'lodash';


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

  public getPageProps() {
    const { pages } = this.state;
    const { cardData: { columnNum = 1 } } = this.props;
    const pagesChunk = _.chunk(pages, columnNum);
    const result: IPageProp[] = [];
    pagesChunk.forEach(chunk => { // [[], []]
      if (Array.isArray(chunk) && chunk.length) {
        const { paperType, size } = chunk[0] as PageClass;
        result.push({
          paperType,
          columnNum,
          size,
          pages: chunk,
        });
      }
    });
    return result;
  }

  public render() {
    const { cardData } = this.props;
    let pages = this.getPageProps();
    
    return (
      <div className={styles.appWrapper}>
        <div className={styles.pagesWrapper}>
          {
            pages.map((page, idx) => (
              <SvgPage
                cardData={cardData}
                key={idx}
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
