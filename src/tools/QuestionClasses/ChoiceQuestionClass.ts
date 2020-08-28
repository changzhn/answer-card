import _ from 'lodash';
import PaperType from '@/constants/PaperType';
import Size from '@/constants/Size';
import PageClass from './PageClass';
import BaseClass from './BaseClass';

export interface IGroupRow {
  height: number;
  groupCol: {
    col: number,
    group: GlobalValue.IGeneralQuestionType[]
  }[];
};

export default class ChoiceQuestionCLass implements BaseClass {
  public offsetY: number = 0;
  public question: GlobalValue.IGeneralBigQuestionType;
  public requiredHeight: number;
  public partNo: number;
  public paperType: PaperType;
  public groupRows: IGroupRow[] = [];

  public constructor(
    bigQuestion: GlobalValue.IGeneralBigQuestionType,
    paperType: PaperType,
    groupRows?: IGroupRow[],
  ) {
    this.question = bigQuestion;
    this.partNo = 0;
    this.paperType = paperType;

    if (groupRows) {
      this.groupRows = groupRows;
    } else {
      this.setGroupRows();
    }

    this.requiredHeight = this.getRequiredHeight();
  }

  public getRequiredHeight() {
    if (Array.isArray(this.groupRows)) {
      return this.groupRows.reduce((prev, next) => prev + next.height, 0);
    }
    return 0;
  }

  public setGroupRows() {
    let cols = 0;

    // 纸型一行容纳下的组数
    const groupPerRow = Size[this.paperType].choiceGroup;
    // 几个题为一组
    const { groupSize } = this.question;
    // 组高
    const groupHeight = (groupSize as number) * 5 + 2;
    // 分组
    const groups = _.chunk(this.question.questions as GlobalValue.IGeneralQuestionType[], groupSize);

    let row: IGroupRow = {
      height: groupHeight,
      groupCol: [],
    };

    groups.forEach(group => {
      let groupCols = this.getGroupCol(group); // 1或2
      cols += groupCols;
      if (cols >= groupPerRow) {
        if (cols === groupPerRow) {
          row.groupCol.push({
            group,
            col: groupCols,
          });
        }
        cols = 0;
        this.groupRows.push(row);
        row = {
          height: groupHeight,
          groupCol: [],
        };
      } else {
        row.groupCol.push({
          group,
          col: groupCols,
        });
      }
    });
    if (row.groupCol.length) {
      this.groupRows.push(row);
    }
  }

  /**
   *
   * @param group 分组占用的列数，一列固定宽度32.5，只要选项超过4个就会占用2列，每列固定高度25mm+2mm
   */
  public getGroupCol(group: any[]) {
    let col = 1;
    for(let i = 0; i < group.length; i++) {
      let question = group[i];
      if (question.length > 4) {
        col = 2;
        break;
      }
    }
    return col;
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
    const nextQuestion = new ChoiceQuestionCLass(this.question, this.paperType, nextGroupRows);
    nextQuestion.partNo = this.partNo + 1;
    return {
      currentPage,
      nextQuestion,
    }
  }
};
