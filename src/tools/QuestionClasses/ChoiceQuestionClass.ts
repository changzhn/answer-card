import { IBigQuestion } from '@/models/cardData'
import PageClass from './PageClass';
import BaseClass from './BaseClass';

export default class ChoiceQuestionCLass implements BaseClass {
  question: IBigQuestion;
  requiredHeight: number;
  partNo: number;

  public constructor(question: IBigQuestion) {
    this.question = question;
    this.partNo = 0;
    // 计算该解答题需要的空间
    this.requiredHeight = this.getRequiredHeight();
  }

  public getRequiredHeight() {
    return 54;
  }

  public splitSelf(currentPage: PageClass) {
    const nextQuestion = null;
    return {
      currentPage,
      nextQuestion,
    }
  }
};
