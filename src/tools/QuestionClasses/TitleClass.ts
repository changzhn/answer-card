import QuestionType from '@/constants/QuestionType';
import BaseClass from './BaseClass';
import PageClass from './PageClass';

export default class TitleClass implements BaseClass {
  public offsetY: number = 0;
  public requiredHeight: number;
  public question: any;
  public questionTitle: string;
  public questionNo: number;

  constructor(question: any) {
    this.question = {
      ...question,
      questionType: QuestionType.Title,
    };
    this.questionTitle = question.questionTitle;
    this.questionNo = question.questionNo;
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
