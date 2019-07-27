import * as React from 'react';
import TitleClass from '@/tools/QuestionClasses/TitleClass';
import Utils from '@/utils/Utils';

interface IProps {
  component: TitleClass;
}

const Title: React.SFC<IProps> = (props) => {
  const height = Utils.addUnit(props.component.requiredHeight);
  return (
    <div style={{height: height, lineHeight: height}}>
      {Utils.arabia2simplifiedChinese(props.component.question.questionNo)}、
      {props.component.question.questionTitle}
    </div>
  )
}

export default Title;
