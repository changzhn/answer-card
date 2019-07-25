import React from 'react';
import styles from './index.css';
import Page from '../components/Page';

export default function() {
  return (
    <div className={styles.appWrapper}>
      <div className={styles.pagesWrapper}>
        <Page />
      </div>
    </div>
  );
}
