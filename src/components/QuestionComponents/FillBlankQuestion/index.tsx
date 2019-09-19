import * as React from 'react';
import FillBlankClass from '@/tools/QuestionClasses/FillBlankClass';
import Text from '../../Text';

interface IProps {
  component: FillBlankClass;
  colWidth: number;
}

const FillBlankQuestion: React.SFC<IProps> = ({ component, colWidth }) => {
  const { groupRows, offsetY, requiredHeight } = component;
  let groupOffsetY = 0;
  return (
    <g transform={`translate(0, ${offsetY})`}>
      <rect x="0" y="0" width={colWidth} height={requiredHeight} fill="transparent" stroke="#000" strokeWidth="0.2" />

      {
        groupRows.map(({ rowId, group, height }, rowIdx) => {
          if (rowIdx !== 0) {
            groupOffsetY += groupRows[rowIdx - 1].height;
          }
          const questionWidth = colWidth / group.length;

          return (
            <g key={rowId} transform={`translate(0, ${groupOffsetY})`}>
              <rect x="0" y="0" width={colWidth} height={height} fill="transparent" />

              {
                group.map((question, qIdx) => (
                  <Text 
                    key={question.questionId}
                    x={questionWidth * qIdx + 1}
                    y={0}
                    width={questionWidth - 2}
                    height={height}
                    text={`${question.questionNo}、`}
                    align="left"
                    bottom={true}
                  />
                ))
              }
            </g>
          )
        })
      }
    </g>
  );
};

export default FillBlankQuestion;
