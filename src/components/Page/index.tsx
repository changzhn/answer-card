import * as React from 'react';
import styles from './index.css';
import { IGlobalState } from '@/models/global';
import LocatingBlocks from '@/components/LocatingBlocks';
import PageClass from '@/tools/QuestionClasses/PageClass';
import getComponent from './getComponent';
import CardInfo from '@/components/CardInfo';

interface IProps {
  global: IGlobalState;
  page: PageClass;
  totalPage: number;
}
export default class Page extends React.Component<IProps> {
	public render() {
    const { global, totalPage, page } = this.props;
    const { pageNo, size } = page;
    const { actualWidth, actualHeight } = size;
		return (
			<div className={styles.pageWrapper} style={{width: `${actualWidth}mm`, height: `${actualHeight}mm`}}>
        <div className={styles.contentWrapper}>
          {pageNo === 1 ? <CardInfo size={size}/> : null}
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
