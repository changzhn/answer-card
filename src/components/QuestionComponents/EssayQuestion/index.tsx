import * as React from 'react';
import styles from './index.css';
import EssayQuestionClass from '@/tools/QuestionClasses/EssayQuestionClass';

const { wrapper, blocksWrapper, blockRowWrapper, blockSquare, blockBlankRow, hundred } = styles;

interface IProps {
  component: EssayQuestionClass;
}

const EssayQuestion: React.SFC<IProps> = ({ component }) => {
  const { lenPerRow, rows, prevRows } = component;
  return (
    <div className={wrapper}>
      <div className={blocksWrapper}>
        {
          new Array(rows).fill(0).map((row, rowIdx) => (
            <React.Fragment key={rowIdx}>
              <div className={blockRowWrapper}>
                {new Array(lenPerRow - 1).fill(0).map((span, colIndx) => {
                  let rest = (prevRows + rowIdx + 1) * lenPerRow + colIndx + 1;
                  if (rest === 1099) {
                    // debugger
                  }
                  let num = 0;
                  let style = {};
                  if (rest % 100 === 0) {
                    num = rest / 100;
                  } else if(rest % 100 % 99 === 0 && colIndx === lenPerRow - 2) {
                    num = Math.ceil(rest / 100);
                    style = {left: '8mm'};
                  }
                  return (
                    <span key={colIndx} className={blockSquare}>
                      {num !== 0 ? <span style={style} className={hundred}>{num * 100}</span> : null}
                    </span>
                  )
                })}
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
