import PageClass from './PageClass';
import BaseClass from './BaseClass';
import PaperType from '@/constants/PaperType';
import Size from '@/constants/Size';

export default class EssayQuestionClass implements BaseClass {
  public offsetY: number = 0;
  public question: GlobalValue.IGeneralQuestionType;
  public requiredHeight: number;
  public partNo: number;
  public paperType: PaperType;
  public lenPerRow: number;
  public rows: number;
  public restLength: number;
  public prevRows: number;

  public constructor(
    question: GlobalValue.IGeneralQuestionType,
    paperType: PaperType,
    restLength?: number,
  ) {
    this.question = question;
    this.paperType = paperType;
    this.partNo = 0;
    // 计算该解答题需要的空间
    this.prevRows = 0;
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
    let rows = Math.floor((currentPage.availableHeight - 10) / (8 + 2.5));
    if (rows <=0 ) {
      rows = 0;
    }
    this.rows = rows;
    const restLength = this.restLength - this.rows * this.lenPerRow;
    const nextQuestion = new EssayQuestionClass(this.question, this.paperType, restLength);
    nextQuestion.partNo = this.partNo + 1;
    nextQuestion.prevRows = this.prevRows + this.rows;

    if (this.rows !== 0) {
      this.offsetY = currentPage.contentHeight - currentPage.availableHeight;
      this.requiredHeight = currentPage.availableHeight;
      currentPage.addComponents(this);
    }
    return {
      currentPage,
      nextQuestion,
    }
  }
};
