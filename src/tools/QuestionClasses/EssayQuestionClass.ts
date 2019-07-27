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

  public constructor(question: IAnswerQuestion, paperType: PaperType) {
    this.question = question;
    this.paperType = paperType;
    this.partNo = 0;
    // 计算该解答题需要的空间
    this.lenPerRow = 1;
    this.rows = 1;
    this.requiredHeight = this.getRequiredHeight();
  }

  public getRequiredHeight() {
    const paddingHeight = 10; // 上下padding
    this.lenPerRow = Size[this.paperType].essayCount;
    this.rows = Math.ceil(this.question.length / this.lenPerRow);
    const rowsHeight = this.rows * (8 + 2.5) - 2.5; // 每行8mm空行2.5，减去最后一行的2.5
    return rowsHeight + paddingHeight;
  }

  public splitSelf(currentPage: PageClass) {
    const nextQuestion = null;
    return {
      currentPage,
      nextQuestion,
    }
  }
};
