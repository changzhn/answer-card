import * as React from 'react';
import { Button } from 'antd';
import styles from './index.less';
import QuestionType, { questions } from '@/constants/QuestionType';

export interface IProps {
  addQuestion: (type: QuestionType) => void;
}

export default class AddQuestions extends React.Component<IProps> {
  public render() {
    return (
      <div>
        {
          questions.map(({ label, value }) => (
            <Button
              key={value}
              className={styles.btn}
              type="primary"
              // tslint:disable-next-line: jsx-no-lambda
              onClick={() => this.props.addQuestion(value)}
            // tslint:disable-next-line: jsx-alignment
            >{label}</Button>
          ))
        }
      </div>
    );
  }
}
