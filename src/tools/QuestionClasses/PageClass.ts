
export default class PageClass {
  constructor({ contentHeight, pageNo }) {
    this.contentHeight = contentHeight;
    this.availableHeight = contentHeight;
    this.pageNo = pageNo;
    this.components = [];
  }
}
