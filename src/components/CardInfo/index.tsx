import * as React from 'react';
import { ISizeItem } from '@/constants/Size';
import Utils from '@/utils/Utils';
import CardTitle from './CardTitle';

interface IProps {
  size: ISizeItem;
}

export default class PaperInfo extends React.Component<IProps> {
  render() {
    const { size } = this.props;
    return (
      <div style={{height: Utils.addUnit(size.cardInfoHeight)}}>
        <CardTitle />
      </div>
    )
  }
}
