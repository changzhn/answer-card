import * as React from 'react';
import styles from './index.css';
import EssayQuestionClass from '@/tools/QuestionClasses/EssayQuestionClass';

const { wrapper, blocksWrapper, blockRowWrapper, blockSquare, blockBlankRow } = styles;

interface IProps {
  component: EssayQuestionClass;
}

const EssayQuestion: React.SFC<IProps> = ({ component }) => {
  const { lenPerRow, rows } = component;
  return (
    <div className={wrapper}>
      <div className={blocksWrapper}>
        {
          new Array(rows).fill(0).map((a, rowIdx) => (
            <React.Fragment key={rowIdx}>
              <div className={blockRowWrapper}>
                {new Array(lenPerRow - 1).fill(0).map((_, idx) => <span key={idx} className={blockSquare} />)}
              </div>
              {rowIdx !== rows - 1 ? <div className={blockBlankRow} /> : null}
            </React.Fragment>
          ))
        }
      </div>
    </div>
  )
}

export default EssayQuestion;
