import * as React from 'react';
import styles from './HandWrittenInfo.css';

const { wrapper, item, left, right } = styles;

const HandWrittenInfo: React.SFC = () => (
  <div className={wrapper}>
    <div className={item}>
      <span className={left}>姓名：</span>
      <span className={right} />
    </div>

    <div className={item}>
      <span className={left}>班级：</span>
      <span className={right} />
    </div>

    <div className={item}>
      <span className={left}>座位号：</span>
      <span className={right} />
    </div>
  </div>
)

export default HandWrittenInfo;
