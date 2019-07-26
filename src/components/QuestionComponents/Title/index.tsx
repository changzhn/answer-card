import * as React from 'react';
import TitleClass from '@/tools/QuestionClasses/TitleClass';
import Utils from '@/utils/Utils';

interface IPoprs {
  component: TitleClass;
}

const Title: React.SFC<IProps> = (props) => {
  const height = Utils.addUnit(props.component.requiredHeight);
  return (
    <div style={{height: height, lineHeight: height}}>
      {props.component.question.questionTitle}
    </div>
  )
}

export default Title;
