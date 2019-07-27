import { IAnswerQuestion } from '@/models/cardData'
import PageClass from './PageClass';
import BaseClass from './BaseClass';
import PaperType from '@/constants/PaperType';
import Size from '@/constants/Size';

export default class EssayQuestionClass implements BaseClass {
  question: IAnswerQuestion;
  requiredHeight: number;
  partNo: number;
  paperType: PaperType;
  lenPerRow: number;
  rows: number;
  restLength: number;

  public constructor(question: IAnswerQuestion, paperType: PaperType, restLength?: number) {
    this.question = question;
    this.paperType = paperType;
    this.partNo = 0;
    // 计算该解答题需要的空间
    this.restLength = restLength || this.question.length;
    this.lenPerRow = 1;
    this.rows = 1;
    this.requiredHeight = this.getRequiredHeight();
  }

  public getRequiredHeight() {
    const paddingHeight = 10; // 上下padding
    this.lenPerRow = Size[this.paperType].essayCount;
    this.rows = Math.ceil(this.restLength / this.lenPerRow);
    const rowsHeight = this.rows * (8 + 2.5) - 2.5; // 每行8mm空行2.5，减去最后一行的2.5
    return rowsHeight + paddingHeight;
  }

  public splitSelf(currentPage: PageClass) {
    this.rows = Math.floor((currentPage.availableHeight - 10) / (8 + 2.5));
    const restLength = this.restLength - this.rows * this.lenPerRow;
    const nextQuestion = new EssayQuestionClass(this.question, this.paperType, restLength);
    nextQuestion.partNo = this.partNo + 1;
    currentPage.components.push(this);
    return {
      currentPage,
      nextQuestion,
    }
  }
};
