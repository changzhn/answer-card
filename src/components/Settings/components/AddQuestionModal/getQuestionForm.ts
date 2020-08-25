import QuestionType from '@/constants/QuestionType';
import ChoicesForm from './ChoicesForm';

export default function getQuestionForm(type: QuestionType) {
  switch(type) {
    case QuestionType.Choices:
      return ChoicesForm;

    default:
      return ChoicesForm;
  }
}
