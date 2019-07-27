import * as React from 'react';
import { ISizeItem } from '@/constants/Size';
import Utils from '@/utils/Utils';
import CardTitle from './CardTitle';
import { ICardData } from '@/models/cardData';
import RegistrationNo from './RegistrationNo';

interface IProps {
  size: ISizeItem;
  cardData: ICardData;
}

export default class PaperInfo extends React.Component<IProps> {
  render() {
    const { size, cardData } = this.props;
    return (
      <div style={{height: Utils.addUnit(size.cardInfoHeight)}}>
        <CardTitle title={cardData.cardTitle} />
        <RegistrationNo />
      </div>
    )
  }
}
