import QuestionType from '@/constants/QuestionType';
import { IBigQuestion } from '@/models/cardData';

export default class TitleClass {
  requiredHeight: number;
  question: IBigQuestion;
  constructor(question: IBigQuestion) {
    this.question = {
      ...question,
      questionType: QuestionType.Title,
    };
    this.requiredHeight = 8;
  }
}
