import * as React from 'react';
import styles from './index.css';

interface IProps {
  contentHeight: number;
  colWidth: number;
  pageNo: number;
}

const PageNum: React.SFC<IProps> = ({ pageNo, contentHeight, colWidth }) => {
  return (
    <g transform={`translate(0, ${contentHeight})`}>
      <rect x="0" y="0" width={`${colWidth}`} height="10" fill="transparent" />
      <text className={styles.pageNum} x={`${colWidth / 2}`} y="6" width={`${colWidth}`} height="10">第{pageNo}页</text>
    </g>
  );
};

export default PageNum;
