import { IAnswerQuestion } from '@/models/cardData'
import PageClass from './PageClass';

export default class AnswerQuestionClass {
  question: IAnswerQuestion;
  requiredHeight: number;
  partNo: number;

  public constructor(question: IAnswerQuestion, delta?: number) {
    this.question = question;
    this.partNo = 0;
    // 计算该解答题需要的空间
    this.requiredHeight = delta || this.getRequiredHeight(question);
  }

  public getRequiredHeight(question: IAnswerQuestion) {
    return question.height;
  }

  public splitSelf(currentPage: PageClass) {
    const nextPage = new PageClass(currentPage.contentHeight, currentPage.pageNo + 1);
    const delta = this.requiredHeight - currentPage.availableHeight;
    this.requiredHeight = currentPage.availableHeight;
    const nextPageAnswerQuestion = new AnswerQuestionClass(this.question, delta);
    currentPage.components.push(this);
    nextPage.components.push(nextPageAnswerQuestion);
    return {
      currentPage,
      nextPage,
    }
  }
};
