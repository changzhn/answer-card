import * as React from 'react';
// import styles from './Attention.css';

const { wrapper, left, right } = {} as any;

const Attention: React.SFC = () => (
  <div className={wrapper}>
    <div className={left}>
      注意事项
    </div>

    <div className={right}>
      1、答题前，考生先将自己的姓名、准考证号填写清楚。<br />
      2、选择题部分必须使用 2B 铅笔填涂；非选择题部分必须使用 0.5 毫米及以上黑色签字笔答题；字体工整、笔迹清晰。<br />
      3、请按题号顺序在各题目的答题区区域内作答，超出区域书写的答案无效；在草稿纸、试题卷上答题无效。<br />
      4、保持卡面清洁，不要折叠、不要弄破。
    </div>
  </div>
);

export default Attention;
