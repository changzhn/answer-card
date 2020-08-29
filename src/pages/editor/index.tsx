import React from 'react';
import SvgPage, { IPageProp } from '@/components/Page';
import question2page from '@/tools/question2page';
import PageClass from '@/tools/QuestionClasses/PageClass';
import Settings from '@/components/Settings';
import _ from 'lodash';
import styles from './index.css';


interface IProps {
  cardData: GlobalValue.AnswerCardData;
  dispatch: React.Dispatch<GlobalValue.Action>;
}

interface IState {
  pages: PageClass[];
}

export default class AnswerCardMain extends React.Component<IProps, IState> {

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
    const { cardData, dispatch } = this.props;
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

        <Settings
          dispatch={dispatch}
          cardData={cardData}
        />
      </div>
    )
  }
}
