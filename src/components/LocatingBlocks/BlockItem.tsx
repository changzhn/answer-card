import * as React from 'react';
import styles from './index.css';

interface IProps {
  value: string;
}

const BlockItem: React.SFC<IProps> = ({ value }) => <span className={`${styles.blockItem} ${styles[`${value}`]}`} />

export default BlockItem;
