import * as React from 'react';
import Size from '@/constants/Size';
import PaperType from '@/constants/PaperType';
import Utils from '@/utils/Utils';

export default class PaperInfo extends React.Component {
  render() {
    return (
      <div style={{height: Utils.addUnit(Size[PaperType.A4].cardInfoHeight)}}>
        x
      </div>
    )
  }
}
