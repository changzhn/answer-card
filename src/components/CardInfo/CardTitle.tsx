import * as React from 'react';
import styles from './CardTitle.css';

const CardTitle: React.SFC<{title: string}> = ({ title }) => (
  <div className={styles.cardTitle}>
    {title}
  </div>
)

export default CardTitle;
