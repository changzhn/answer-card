import PaperType from './PaperType';

export interface ISizeItem {
  actualWidth: number;
  actualHeight: number;
  contentWidth: number;
  contentHeight: number;
  cardInfoHeight: number;
  essayCount: number;
  choiceGroup: number;
  contentWidthFor1?: number;
  contentWidthFor2?: number;
  gutter2?: number;
  contentWidthFor3?: number;
  gutter3?: number;
}

export interface ISize {
  [key: string]: ISizeItem;
}

const Size: ISize = {
	[PaperType.A4]: {
		actualWidth: 210,
		actualHeight: 297,
    contentWidth: 190,
    contentWidthFor1: 190,
    contentHeight: 277,
    cardInfoHeight: 25,
    essayCount: 22,
    choiceGroup: 6,
  },
  [PaperType.A3]: {
		actualWidth: 420,
		actualHeight: 297,
    contentWidth: 400,
    contentWidthFor2: 190,
    gutter2: 20,
    contentHeight: 277,
    cardInfoHeight: 25,
    essayCount: 22,
    choiceGroup: 6,
	}
}

export default Size;
