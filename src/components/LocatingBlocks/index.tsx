import * as React from 'react';
import { ICardData } from '@/models/cardData';
import BlockItem from './BlockItem';
import PaperType from '@/constants/PaperType';

interface IProps {
  cardData: ICardData;
  currentPage: number;
};

const leftTop = 'leftTop';
const rightTop = 'rightTop';
const leftBottom = 'leftBottom';

const LocatingBlock: React.SFC<IProps> = (props) => {
  const { cardData: { paperType, columnNum } } = props;
  let items = [leftTop, rightTop, leftBottom]; // A4
  if (paperType === PaperType.A32) {
    // TODO:
  }

  return (
    <React.Fragment>
      {
        items.map(item => (
          <BlockItem key={item} value={item}/>
        ))
      }
    </React.Fragment>
  )
}

export default LocatingBlock;
