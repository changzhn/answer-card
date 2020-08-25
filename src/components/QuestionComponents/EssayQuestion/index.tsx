import * as React from 'react';
import EssayQuestionClass from '@/tools/QuestionClasses/EssayQuestionClass';
import Text from '../../Text';

const squareWidth = 8;
const squareHeight = 8;
const blankLineHeight = 2.5;
const combineHeight = squareHeight + blankLineHeight;

interface IProps {
  component: EssayQuestionClass;
  colWidth: number;
}

const EssayQuestion: React.SFC<IProps> = ({ component, colWidth }) => {
  const { offsetY, lenPerRow, rows, requiredHeight, prevRows, partNo, question: { questionNo } } = component;
  const requireWidth = lenPerRow * squareWidth;
  const actualRequireHeight = rows * combineHeight - blankLineHeight;
  const innerOffsetX = (colWidth - requireWidth) / 2;
  const innerOffsetY = (requiredHeight - actualRequireHeight) / 2;

  return (
    <g transform={`translate(0, ${offsetY})`}> {/* 外框 */}
      <rect x="0" y="0" width={colWidth} height={requiredHeight} fill="transparent" strokeWidth="0.2" stroke="#000" />

      { // 题号
        partNo === 0 &&
        <Text 
          x={0}
          y={5}
          width={10}
          height={10}
          align="center"
          text={`${questionNo}、`}
        />
      }

      <g transform={`translate(${innerOffsetX}, ${innerOffsetY})`}> {/* 内框 */}
        <rect x="0" y="0" width={requireWidth} height={actualRequireHeight} fill="transparent" strokeWidth="0.2" stroke="#000" />

        {
          Array(rows).fill(0).map((_, rowIdx) => ( // 行
            <g key={rowIdx} transform={`translate(0, ${combineHeight * rowIdx})`}>
              <rect x="0" y="0" width={requireWidth} height={combineHeight} fill="transparent" />
              
              {
                Array(lenPerRow).fill(0).map((_, colIdx) => { // 列
                  let rest = (prevRows + rowIdx) * lenPerRow + colIdx + 1;
                  let num = 0;

                  if (rest % 100 === 0) {
                    num = rest / 100;
                  }

                  return (
                    <React.Fragment key={colIdx}>
                      {
                        colIdx !== lenPerRow - 1 &&
                        <line x1={squareWidth * (colIdx + 1)} y1="0" x2={squareWidth * (colIdx + 1)} y2={squareHeight} strokeWidth="0.2" stroke="#000" />
                      }

                      { // 整百标记
                        num &&
                        <Text 
                          x={squareWidth * colIdx}
                          y={squareHeight}
                          width={squareWidth}
                          height={squareHeight / 2}
                          align="center"
                          text={`${num * 100}`}
                          fontSize="2pt"
                        />
                      }
                    </React.Fragment>
                  )
                })
              }

              { // 空行
                rowIdx !== rows - 1 &&
                <React.Fragment>
                  <line x1="0" y1={squareHeight} x2={requireWidth} y2={squareHeight} strokeWidth="0.2" stroke="#000" />
                  <line x1="0" y1={combineHeight} x2={requireWidth} y2={combineHeight} strokeWidth="0.2" stroke="#000" />
                </React.Fragment>
              }
            </g>
          ))
        }
      </g>
    </g>
  );
};

export default EssayQuestion;
