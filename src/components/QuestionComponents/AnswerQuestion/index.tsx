import * as React from 'react';
import AnswerQuestionClass from '@/tools/QuestionClasses/AnswerQuestionClass';
import Utils from '@/utils/Utils';
import styles from './index.css';

interface IPoprs {
  component: AnswerQuestionClass;
}

export default class AnswerQuestion extends React.Component<IPoprs> {
  public render() {
    const { component } = this.props;
    const { requiredHeight } = component;
    const height = Utils.addUnit(requiredHeight);
    return (
      <div
        className={styles.questionWrapper}
        style={{height}}
      >
        answer question
      </div>
    )
  }
}
