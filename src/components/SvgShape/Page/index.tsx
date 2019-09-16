import * as React from 'react';
import styles from './index.css';
import Utils from '@/utils/Utils';
import PageClass from '@/tools/QuestionClasses/PageClass';
import { ICardType } from '@/types/interface';

export interface IProps {
    page: PageClass;
    totalPage: number;
    cardData: ICardType;
}
export default class SvgPage extends React.Component<IProps> {
    public render() {
        const { page } = this.props;
        const { size } = page;
        return (
            <svg
                width={`${Utils.mm2px(size.actualWidth)}`}
                height={`${Utils.mm2px(size.actualHeight)}`}
                viewBox={`0 0 ${size.actualWidth} ${size.actualHeight}`}
                version="1.1"
                baseProfile="full"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.svgPage}
            >
                <g
                    transform="translate(10, 10)"
                >
                    <rect x="0" y="0" width="190" height="277" fill="#eee" />
                </g>
            </svg>
        );
    }
}
