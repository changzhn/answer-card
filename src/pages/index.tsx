import React from 'react';
import styles from './index.css';
import Page from '../components/Page';

const mockPages = [[], []];

export default function() {
  return (
    <div className={styles.appWrapper}>
      <div className={styles.pagesWrapper}>
        {
          // tslint:disable-next-line:jsx-no-multiline-js
          mockPages.map((page, idx) => (
            <Page
              key={idx}
              components={page}
              currentPage={idx+1}
              totalPage={mockPages.length}
            />
          ))
        }
      </div>
    </div>
  );
}
