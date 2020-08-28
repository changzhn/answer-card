import * as React from 'react';
import ChoiceQuestionCLass from '@/tools/QuestionClasses/ChoiceQuestionClass';
import Text from '../../Text';
import Letters from '@/constants/letters';

const groupColWidth = 31.5;
const groupColHeight = 5;
const optionWidth = 3.5 + 2;

interface IProps {
  component: ChoiceQuestionCLass;
  colWidth: number;
}

const ChoiceQuestion: React.SFC<IProps> = ({ component, colWidth }) => {
  const { groupRows, offsetY, requiredHeight } = component;
  let groupOffsetY = 0;

  return (
    <g transform={`translate(0, ${offsetY})`}>
      <rect x="0" y="0" width={colWidth} height={requiredHeight} fill="transparent" stroke="#000" strokeWidth="0.2" />

      {
        Array.isArray(groupRows) ? groupRows.map(({ height, groupCol }, groupRowIdx) => {
          let groupOffsetX = 0;
          if (groupRowIdx !== 0) {
            groupOffsetY += groupRows[groupRowIdx - 1].height;
          }
          return (
            <g key={groupRowIdx} transform={`translate(0, ${groupOffsetY})`}>
              <rect x="0" y="0" width={colWidth} height={height} fill="transparent" />

              {
                Array.isArray(groupCol) ? groupCol.map(({ col, group }, groupColIdx) => {
                  if (groupColIdx !== 0) {
                    groupOffsetX += (groupCol[groupColIdx - 1].col) * groupColWidth;
                  }
                  return (
                    <g key={groupColIdx} transform={`translate(${groupOffsetX}, 0)`}>
                      <rect x="0" y="0" width={col * groupColWidth} height={height} fill="transparent" />

                      {
                        Array.isArray(group) ? group.map(({ questionNo, questionId, length }, qIdx) => {

                          return (
                            <g key={questionId} transform={`translate(0, ${qIdx * groupColHeight})`}>
                              <rect x="0" y="0" width={31} height={2} fill="transparent" transform="translate(0, 1.5)" />
                              <Text
                                x={0}
                                y={1.5}
                                width={6}
                                height={2}
                                fontSize="1.5pt"
                                align="center"
                                text={questionNo}
                              />

                              {
                                Array(length).fill(0).map((_, oIdx) => (
                                  <Text
                                    key={oIdx}
                                    x={6 + optionWidth * oIdx}
                                    y={1.5}
                                    width={3.5}
                                    height={2}
                                    fontSize="1.2pt"
                                    align="center"
                                    text={Letters[oIdx]}
                                    border={true}
                                  />
                                ))
                              }
                            </g>
                          )
                        }) : null
                      }
                    </g>
                  )
                }) : null
              }
            </g>
          )
        }) : null
      }
    </g>
  );
};

export default ChoiceQuestion;
