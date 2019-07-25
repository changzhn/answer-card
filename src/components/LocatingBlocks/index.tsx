import * as React from 'react';
import { IGlobalState } from '@/models/global';
import BlockItem from './BlockItem';
import PaperType from '@/constants/PaperType';

interface IProps {
  global: IGlobalState;
  currentPage: number;
};

const leftTop = 'leftTop';
const rightTop = 'rightTop';
const leftBottom = 'leftBottom';

const LocatingBlock: React.SFC<IProps> = (props) => {
  const { global: { paperType, columnNum } } = props;
  let items = [leftTop, rightTop, leftBottom]; // A4
  if (paperType === PaperType.A3) {
    // TODO:
  }

  return (
    <React.Fragment>
      {
        // tslint:disable-next-line:jsx-no-multiline-js
        items.map(item => (
          <BlockItem key={item} value={item}/>
        ))
      }
    </React.Fragment>
  )
}

export default LocatingBlock;
