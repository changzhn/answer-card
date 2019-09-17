import * as React from 'react';
import EssayQuestionClass from '@/tools/QuestionClasses/EssayQuestionClass';

const squareWidth = 8;
const squareHeight = 8;
const blankLineHeight = 2.5;
const combineHeight = squareHeight + blankLineHeight;

interface IProps {
  component: EssayQuestionClass;
  colWidth: number;
}

const EssayQuestion: React.SFC<IProps> = ({ component, colWidth }) => {
  const { offsetY, lenPerRow, rows, requiredHeight } = component;
  const requireWidth = lenPerRow * squareWidth;
  const actualRequireHeight = rows * combineHeight - blankLineHeight;
  const innerOffsetX = (colWidth - requireWidth) / 2;
  const innerOffsetY = (requiredHeight - actualRequireHeight) / 2;

  return (
    <g transform={`translate(0, ${offsetY})`}>
      <rect x="0" y="0" width={colWidth} height={requiredHeight} fill="transparent" strokeWidth="0.2" stroke="#000" />
      <g transform={`translate(${innerOffsetX}, ${innerOffsetY})`}>
        <rect x="0" y="0" width={requireWidth} height={actualRequireHeight} fill="transparent" strokeWidth="0.2" stroke="#000" />

        {
          Array(rows).fill(0).map((_, rowIdx) => (
            <g key={rowIdx} transform={`translate(0, ${combineHeight * rowIdx})`}>
              <rect x="0" y="0" width={requireWidth} height={combineHeight} fill="transparent" />
              
              {
                Array(lenPerRow - 1).fill(0).map((_, colIdx) => (
                  <line key={colIdx} x1={squareWidth * (colIdx + 1)} y1="0" x2={squareWidth * (colIdx + 1)} y2={squareHeight} strokeWidth="0.2" stroke="#000" />
                ))
              }

              {
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
