import * as React from 'react';
import AnswerQuestionClass from '@/tools/QuestionClasses/AnswerQuestionClass';
import Text from '../../Text';

export interface IProps {
  component: AnswerQuestionClass;
  colWidth: number;
};
  

export default class AnswerQuestion extends React.Component<IProps> {
  public render() {
    const { component, colWidth } = this.props;
    const { requiredHeight, offsetY, partNo } = component;
    return (
      <g transform={`translate(0, ${offsetY})`}>
        <rect x="0" y="0" width={colWidth} height={requiredHeight} fill="transparent" stroke="#000" strokeWidth="0.2" />
        {
          partNo === 0 &&
          <Text 
            x={1}
            y={1}
            width={10}
            height={10}
            text={`${component.question.questionNo}、`}
            align="center"
          />
        }
      </g>
    );
  }
}
