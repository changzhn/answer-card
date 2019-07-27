import * as React from 'react';
import styles from './index.css';
import { IGlobalState } from '@/models/global';
import PaperType from '@/constants/PaperType';
import Size, { ISizeItem } from '@/constants/Size';
import LocatingBlocks from '@/components/LocatingBlocks';
import PageClass from '@/tools/QuestionClasses/PageClass';
import getComponent from './getComponent';

interface IProps {
  global: IGlobalState;
  page: PageClass;
  totalPage: number;
}
export default class Page extends React.Component<IProps> {
  public getAcutalWidthAndHeight(paperType: PaperType): ISizeItem {
    return Size[paperType];
  }

	public render() {
    const { global, totalPage, page } = this.props;
    const { pageNo } = page;
    const { paperType } = global;
    const { actualWidth, actualHeight } = this.getAcutalWidthAndHeight(paperType);
		return (
			<div className={styles.pageWrapper} style={{width: `${actualWidth}mm`, height: `${actualHeight}mm`}}>
        <div className={styles.contentWrapper}>
          {
            page.components.map(component => getComponent(component))
          }
        </div>
        <LocatingBlocks global={global} currentPage={pageNo} />
        <div className={styles.pageNum}>第{pageNo}页 共{totalPage}页</div>
			</div>
		)
	}
}
