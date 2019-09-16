import * as React from 'react';
import AnswerQuestionClass from '@/tools/QuestionClasses/AnswerQuestionClass';

export interface IProps {
  component: AnswerQuestionClass;
  colWidth: number;
};
  

export default class AnswerQuestion extends React.Component<IProps> {
  public render() {
    console.log(this.props)
    const { component, colWidth } = this.props;
    const { requiredHeight, offsetY } = component;
    return (
      <rect x="0" y={offsetY} width={colWidth} height={requiredHeight} fill="transparent" stroke="#000" strokeWidth="0.2" />
    );
  }
}
