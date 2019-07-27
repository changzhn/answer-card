import * as React from 'react';
import styles from './index.css';

const { wrapper, blocksWrapper, blockRowWrapper, blockSquare, blockBlankRow } = styles;

export default class EssayQuestion extends React.Component {
  render() {
    return (
      <div className={wrapper}>
        <div className={blocksWrapper}>
          <div className={blockRowWrapper}>
            {new Array(21).fill(0).map((_, idx) => <span key={idx} className={blockSquare} />)}
          </div>
          <div className={blockBlankRow} />
        </div>
      </div>
    )
  }
}
