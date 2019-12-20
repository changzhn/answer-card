import * as React from 'react';
import { Button } from 'antd';
import styles from './index.less';
import QuestionType, { questions } from '@/constants/QuestionType';

export interface IProps {
  addQuestion: (type: QuestionType) => void;
}

const AddQuestions: React.FC<IProps> = (props) => {

  return (
    <div>
      {
        questions.map(({ label, value }) => (
          <Button
            key={value}
            className={styles.btn}
            type="primary"
            onClick={() => props.addQuestion(value)}
          >{label}</Button>
        ))
      }
    </div>
  );
}

export default AddQuestions;
