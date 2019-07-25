import * as React from 'react';
import styles from './index.css';
import { connect } from 'dva';
import { IGlobalState } from '@/models/global';
import PaperType from '@/constants/PaperType';
import Size, { ISizeItem } from '@/constants/Size';
import LocatingBlocks from '@/components/LocatingBlocks';

interface IProps {
  global: IGlobalState;
  components: Array<any>;
  currentPage: number;
}

@connect(({ global }) => ({
  global,
}))
export default class Page extends React.Component<IProps> {
  public getAcutalWidthAndHeight(paperType: PaperType): ISizeItem {
    return Size[paperType];
  }

	public render() {
    const { global, currentPage } = this.props;
    const { paperType } = global;
    const { actualWidth, actualHeight } = this.getAcutalWidthAndHeight(paperType);

		return (
			<div className={styles.pageWrapper} style={{width: `${actualWidth}mm`, height: `${actualHeight}mm`}}>
        <LocatingBlocks global={global} currentPage={currentPage} />
			</div>
		)
	}
}
