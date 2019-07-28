import { IAnswerQuestion } from '@/models/cardData'
import PageClass from './PageClass';
import BaseClass from './BaseClass';

export default class AnswerQuestionClass implements BaseClass {
  question: IAnswerQuestion;
  requiredHeight: number;
  partNo: number;

  public constructor(question: IAnswerQuestion, delta?: number) {
    this.question = question;
    this.partNo = 0;
    // 计算该解答题需要的空间
    this.requiredHeight = delta || this.getRequiredHeight();
  }

  public getRequiredHeight() {
    return this.question.height;
  }

  public splitSelf(currentPage: PageClass) {
    const delta = this.requiredHeight - currentPage.availableHeight;
    this.requiredHeight = currentPage.availableHeight;
    let nextQuestion = null;

    if (delta >= 10) { // 下页不足10mm时，省略掉
      nextQuestion = new AnswerQuestionClass(this.question, delta);
      nextQuestion.partNo = this.partNo + 1;
    }
    currentPage.components.push(this);
    return {
      currentPage,
      nextQuestion,
    }
  }
};
