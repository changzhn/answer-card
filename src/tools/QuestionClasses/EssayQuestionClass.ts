import { IAnswerQuestion } from '@/models/cardData'
import PageClass from './PageClass';
import BaseClass from './BaseClass';

export default class EssayQuestionClass implements BaseClass {
  question: IAnswerQuestion;
  requiredHeight: number;
  partNo: number;

  public constructor(question: IAnswerQuestion) {
    this.question = question;
    this.partNo = 0;
    // 计算该解答题需要的空间
    this.requiredHeight = this.getRequiredHeight(question);
  }

  public getRequiredHeight(question: IAnswerQuestion) {
    return question.height;
  }

  public splitSelf(currentPage: PageClass) {
    const nextQuestion = null;
    return {
      currentPage,
      nextQuestion,
    }
  }
};
