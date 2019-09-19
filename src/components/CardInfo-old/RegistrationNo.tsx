import * as React from 'react';
import styles from './RegistrationNo.css';
import FillBlock from '@/components/FillBlock';

const { wrapper, title, square, squareItem, handWritten, handWrittenItem } = styles;

const RegistrationNo: React.SFC = () => (
  <div className={wrapper}>
    <div className={title}>准备考证号</div>

    <div className={square}>
      {
        new Array(8).fill(0).map((_, idx) => (
          <div key={idx} className={squareItem} />
        ))
      }
    </div>

    <div className={handWritten}>
      {
        new Array(8).fill(0).map((_, idx) => (
          <div key={idx} className={handWrittenItem}>
            {
              new Array(10).fill(0).map((n, i) => <FillBlock key={i}>{i}</FillBlock>)
            }
          </div>
        ))
      }
    </div>
  </div>
)

export default RegistrationNo;
