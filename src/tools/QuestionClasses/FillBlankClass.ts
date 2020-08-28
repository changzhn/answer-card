import PageClass from './PageClass';
import BaseClass from './BaseClass';

export default class FillBlankClass implements BaseClass {
  public offsetY: number = 0;
  public groupRows: GlobalValue.IFillBlankQuestionType[];
  public requiredHeight: number;
  public partNo: number;
  public question: GlobalValue.IGeneralBigQuestionType;

  public constructor(
    bigQuestion: GlobalValue.IGeneralBigQuestionType,
    groupRows?: GlobalValue.IFillBlankQuestionType[],
  ) {
    this.question = bigQuestion;
    if (groupRows) {
      this.groupRows = groupRows;
    } else {
      this.groupRows = bigQuestion.questions  as GlobalValue.IFillBlankQuestionType[];
    }
    this.partNo = 0;
    this.requiredHeight = this.getRequiredHeight();
  }

  public getRequiredHeight() {
    if (Array.isArray(this.groupRows)) {
      return this.groupRows.reduce((prev, next) => prev + next.height, 0);
    }
    return 0;
  }

  public splitSelf(currentPage: PageClass) {
    const { contentHeight, availableHeight } = currentPage;
    let splitIdx = 0;
    let totalHeight = 0;

    for(let i = 0; i < this.groupRows.length; i++) {
      totalHeight += this.groupRows[i].height;
      if (totalHeight > availableHeight) {
        splitIdx = i;
        break;
      }
    }

    const currentGroupRows = this.groupRows.slice(0, splitIdx);
    const nextGroupRows = this.groupRows.slice(splitIdx);
    this.groupRows = currentGroupRows;
    this.requiredHeight = this.getRequiredHeight();
    this.offsetY = contentHeight - availableHeight;
    currentPage.addComponents(this);
    const nextQuestion = new FillBlankClass(this.question, nextGroupRows);
    nextQuestion.partNo = this.partNo + 1;
    return {
      currentPage,
      nextQuestion,
    }
  }
};
