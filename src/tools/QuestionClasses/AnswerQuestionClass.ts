import PageClass from './PageClass';
import BaseClass from './BaseClass';

export default class AnswerQuestionClass implements BaseClass {
  public offsetY: number = 0;
  public question: GlobalValue.IGeneralQuestionType;
  public requiredHeight: number;
  public partNo: number;

  public constructor(
    question: GlobalValue.IGeneralQuestionType,
    delta?: number,
  ) {
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
    this.offsetY = currentPage.contentHeight - currentPage.availableHeight;
    currentPage.addComponents(this);
    return {
      currentPage,
      nextQuestion,
    }
  }
};
