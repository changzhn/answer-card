import * as React from 'react';
import { FormInstance } from 'antd/lib/form';
import QuestionType from '@/constants/QuestionType';
import ChoicesForm from './ChoicesForm';

export interface IQuestionForm {
  form: FormInstance;
  editBigQuestion: any;
}

function getQuestionForm(type: QuestionType): React.FC<IQuestionForm> {
  switch(type) {
    case QuestionType.Choices:
      return ChoicesForm;

    default:
      return ChoicesForm;
  }
}

export default getQuestionForm;
