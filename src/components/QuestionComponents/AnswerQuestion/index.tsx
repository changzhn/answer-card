import * as React from 'react';
import AnswerQuestion from '@/tools/QuestionClasses/AnswerQuestion';
import Utils from '@/utils/Utils';
import styles from './index.css';

interface IPoprs {
  component: AnswerQuestion;
}

export default class Title extends React.Component<IPoprs> {
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
