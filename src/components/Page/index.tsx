import * as React from 'react';
import styles from './index.css';
import LocatingBlocks from '@/components/LocatingBlocks';
import PageClass from '@/tools/QuestionClasses/PageClass';
import getComponent from './getComponent';
import CardInfo from '@/components/CardInfo';
import { ICardData } from '@/models/cardData';

interface IProps {
  page: PageClass;
  totalPage: number;
  cardData: ICardData;
}
export default class Page extends React.Component<IProps> {
	public render() {
    const { totalPage, page, cardData } = this.props;
    const { pageNo, size } = page;
    const { actualWidth, actualHeight } = size;
		return (
			<div className={styles.pageWrapper} style={{width: `${actualWidth}mm`, height: `${actualHeight}mm`}}>
        <div className={styles.contentWrapper}>
          {pageNo === 1 ? <CardInfo cardData={cardData} size={size}/> : null}
          {
            page.components.map(component => getComponent(component))
          }
        </div>
        <LocatingBlocks cardData={cardData} currentPage={pageNo} />
        <div className={styles.pageNum}>第{pageNo}页 共{totalPage}页</div>
			</div>
		)
	}
}
