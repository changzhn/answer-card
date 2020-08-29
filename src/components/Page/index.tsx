import _ from 'lodash';
import { ISizeItem } from '@/constants/Size';
import * as React from 'react';
import CardInfo from '../CardInfo';
import ColumnNum from '@/constants/ColumnNum';
import getComponent from './getComponent';
import LocatingBlocks from '../LocatingBlocks';
import PageClass from '@/tools/QuestionClasses/PageClass';
import PageNum from '../PageNum';
import PaperType from '@/constants/PaperType';
import styles from './index.css';
import Utils from '@/utils/Utils';

export interface IPageProp {
  paperType: PaperType;
  columnNum: ColumnNum;
  size: ISizeItem;
  pages: PageClass[];
};

export interface IProps {
  page: IPageProp;
  totalPage: number;
  cardData: GlobalValue.AnswerCardData;
}

const SvgPage: React.FC<IProps>= ({ page, cardData }) => {
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
              <rect x="0" y="0" width={`${colWidth}`} height={`${size.contentHeight}`} fill="transparent" />
              {pageNo === 1 && <CardInfo cardData={cardData} page={page} colWidth={colWidth} />}
              {
                col.components.map(component => getComponent(component, colWidth))
              }
              <PageNum contentHeight={contentHeight} colWidth={colWidth} pageNo={pageNo} />
            </g>
          );
        })
      }

      <LocatingBlocks contentWidth={contentWidth} contentHeight={contentHeight} startX={startX} startY={startY} />
    </svg>
  );
}

export default SvgPage;
