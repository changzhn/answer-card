import * as React from 'react';
import styles from './index.css';
import Utils from '@/utils/Utils';
import PageClass from '@/tools/QuestionClasses/PageClass';
import { ICardType } from '@/types/interface';
import _ from 'lodash';
import PaperType from '@/constants/PaperType';
import ColumnNum from '@/constants/ColumnNum';
import { ISizeItem } from '@/constants/Size';
import LocatingBlocks from '../LocatingBlocks';
import PageNum from '../PageNum';

export interface IPageProp {
  paperType: PaperType;
  columnNum: ColumnNum;
  size: ISizeItem;
  pages: PageClass[];
};

export interface IProps {
  page: IPageProp;
  totalPage: number;
  cardData: ICardType;
}


export default class SvgPage extends React.Component<IProps> {

  public shouldComponentUpdate(nextProps: IProps) {
    if (_.isEqual(this.props.cardData, nextProps.cardData)) {
      return false;
    }
    return true;
  }

  public render() {
    const { page } = this.props;
    const { size, columnNum } = page;
    const { actualWidth, actualHeight, contentWidth, contentHeight } = size;
    // @ts-ignore FIXME:
    const colWidth = size[`contentWidthFor${columnNum}`];
    const startX = (actualWidth - contentWidth) / 2;
    const startY = (actualHeight - contentHeight) / 2;
    let gutter = 0;
    if (columnNum > 1) {
      // @ts-ignore
      gutter = size[`gutter${columnNum}`];
    }

    return (
      <svg
        width={`${Utils.mm2px(size.actualWidth)}`}
        height={`${Utils.mm2px(size.actualHeight)}`}
        viewBox={`0 0 ${size.actualWidth} ${size.actualHeight}`}
        version="1.1"
        baseProfile="full"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.svgPage}
      >
        {
          page.pages.map((col, idx) => {
            const { pageNo } = col;
            const offsetX = startX + (colWidth + gutter) * idx;
            const offsetY = startY;
            return (
              <g
                key={pageNo}
                transform={`translate(${offsetX}, ${offsetY})`}
              >
                <rect x="0" y="0" width={`${colWidth}`} height={`${size.contentHeight}`} fill="#eee" />
                <PageNum contentHeight={contentHeight} colWidth={colWidth} pageNo={pageNo} />
              </g>
            );
          })
        }

        <LocatingBlocks contentWidth={contentWidth} contentHeight={contentHeight} startX={startX} startY={startY} />
      </svg>
    );
  }
}
