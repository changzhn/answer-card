import PageClass from './PageClass';
import BaseClass from './BaseClass';
import PaperType from '@/constants/PaperType';
import Size from '@/constants/Size';
import _ from 'lodash';
import { IGeneralBigQuestionType, IGeneralQuestionType } from '@/types/interface';

export interface IGroupRow {
  height: number;
  groupCol: {
    col: number,
    group: IGeneralQuestionType[]
  }[];
};

// IGeneralQuestionType[][][]的类型
// [
//   {
//     height: 25,
//     group: [
//       [], [], [], [], []
//     ]
//   },
//   {
//     height: 25,
//     group: [
//       [], [], [], [], []
//     ]
//   },
// ]

export default class ChoiceQuestionCLass implements BaseClass {
  public offsetY: number = 0;
  public question: IGeneralBigQuestionType;
  public requiredHeight: number;
  public partNo: number;
  public paperType: PaperType;
  public groupRows: IGroupRow[] = [];

  public constructor(question: IGeneralBigQuestionType, paperType: PaperType) {
    this.question = question;
    this.partNo = 0;
    this.paperType = paperType;
    this.requiredHeight = this.getRequiredHeight();
  }

  public getRequiredHeight() {
    let groupRows = 1;
    let cols = 0;

    // 纸型一行容纳下的组数
    const groupPerRow = Size[this.paperType].choiceGroup;
    // 几个题为一组
    const { groupSize } = this.question;
    // 组高
    const groupHeight = (groupSize as number) * 5 + 2;
    // 分组
    const groups = _.chunk(this.question.questions, groupSize);

    let row: IGroupRow = {
      height: groupHeight,
      groupCol: [],
    };
    
    groups.forEach(group => {
      let groupCols = this.getGroupCol(group); // 1或2
      cols += groupCols;
      if (cols > groupPerRow) {
        cols = 0;
        groupRows++;
        this.groupRows.push(row);
        row = {
          height: groupHeight,
          groupCol: [],
        };
      }
      row.groupCol.push({
        group,
        col: groupCols,
      });
    });
    if (row.groupCol.length) {
      this.groupRows.push(row);
    }
    return groupRows * groupHeight;
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
    const nextQuestion = null;
    this.offsetY = currentPage.contentHeight - currentPage.availableHeight;
    return {
      currentPage,
      nextQuestion,
    }
  }
};
