import TitleClass from './TitleClass';
import AnswerQuestionClass from './AnswerQuestionClass';

export default class PageClass {
  contentHeight: number;
  availableHeight: number;
  pageNo: number;
  components: Array<TitleClass | AnswerQuestionClass>;

  constructor(contentHeight: number, pageNo: number) {
    this.contentHeight = contentHeight;
    this.availableHeight = contentHeight;
    this.pageNo = pageNo;
    this.components = [];
  }
}
