import { IBigQuestion } from '@/models/cardData'
import PageClass from './PageClass';
import BaseClass from './BaseClass';
import PaperType from '@/constants/PaperType';
import Size from '@/constants/Size';
import _ from 'lodash';

export default class ChoiceQuestionCLass implements BaseClass {
  question: IBigQuestion;
  requiredHeight: number;
  partNo: number;
  paperType: PaperType;

  public constructor(question: IBigQuestion, paperType: PaperType) {
    this.question = question;
    this.partNo = 0;
    this.paperType = paperType;
    this.requiredHeight = this.getRequiredHeight();
  }

  public getRequiredHeight() {
    let rows = 1;
    let cols = 0;

    const groupPerRow = Size[this.paperType].choiceGroup;
    // @ts-ignore // TODO: 类型处理
    const { groupSize } = this.question;
    const groups = _.chunk(this.question.questions, groupSize);

    groups.forEach(group => {
      let groupCols = this.getGroupCol(group); // 1或2
      cols += groupCols;

      if (cols >= groupPerRow) {
        cols = 0;
        rows++;
      }
    })
    // console.log(rows)
    return rows * 27;
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
    return {
      currentPage,
      nextQuestion,
    }
  }
};
