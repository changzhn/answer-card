import * as React from 'react';
import styles from './index.css';
import Utils from '@/utils/Utils';

export interface IProps {
    a?: any;
}

export default class SvgPage extends React.Component<IProps> {
    public render() {
        return (
            <svg
                width={`${Utils.mm2px(210)}`}
                height={`${Utils.mm2px(297)}`}
                viewBox={`0 0 210 297`}
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
