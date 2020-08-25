import * as React from 'react';
import { IPageProp } from '../Page';
import { ICardType } from '@/types/interface';
import CardTitle from './CardTitle';
import HandWrittenInfo from './HandWrittenInfo';

interface IProps {
  cardData: ICardType;
  page: IPageProp;
  colWidth: number;
}

const CardInfo: React.SFC<IProps> = ({ page, colWidth, cardData }) => {
  const { size } = page;

  return (
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width={colWidth} height={size.cardInfoHeight} fill="transparent" />
      <CardTitle cardTitle={cardData.cardTitle} colWidth={colWidth} />
      <HandWrittenInfo colWidth={colWidth} />
    </g>
  );
};

export default CardInfo;
