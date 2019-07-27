import QuestionType from '@/constants/QuestionType';
import { IBigQuestion } from '@/models/cardData';
import BaseClass from './BaseClass';
import PageClass from './PageClass';

export default class TitleClass extends BaseClass {
  requiredHeight: number;
  question: IBigQuestion;

  constructor(question: IBigQuestion) {
    super();
    this.question = {
      ...question,
      questionType: QuestionType.Title,
    };
    this.requiredHeight = 8;
  }

  public splitSelf(currentPage: PageClass) {
    const nextQuestion = this;
    return {
      currentPage,
      nextQuestion,
    }
  }
}
