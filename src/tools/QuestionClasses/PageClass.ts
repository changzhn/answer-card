import PaperType from '@/constants/PaperType';
import Size, { ISizeItem } from '@/constants/Size';
import { Union } from '@/tools/question2page';

export default class PageClass {
  public contentHeight: number;
  public availableHeight: number;
  public pageNo: number;
  public size: ISizeItem;
  public paperType: PaperType;
  public components: Union[];

  constructor(paperType: PaperType, pageNo: number) {
    this.paperType = paperType;
    this.pageNo = pageNo;
    this.size = this._getSize(this.paperType);
    this.contentHeight = this.size.contentHeight;

    if (pageNo === 1) {
      this.availableHeight = this.size.contentHeight - this.size.cardInfoHeight;
    } else {
      this.availableHeight = this.size.contentHeight;
    }

    this.components = [];
  }

  _getSize(paperType: PaperType): ISizeItem {
    return Size[paperType];
  }

  addComponents(component: Union) {
    this.components.push(component);
  }
}
