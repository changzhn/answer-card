import * as React from 'react';
import styles from './index.css';

const FillBlock: React.SFC = ({children}) => (
  <span className={styles.fillBlock}>
    <span className={styles.letter}>{children}</span>
  </span>
);

export default FillBlock;
