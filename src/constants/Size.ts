import PaperType from './PaperType';

export interface ISizeItem {
  actualWidth: number;
  actualHeight: number;
  contentWidth: number;
  contentHeight: number;
  cardInfoHeight: number;
  essayCount: number;
}

export interface ISize {
  [key: string]: ISizeItem;
}

const Size: ISize = {
	[PaperType.A41]: {
		actualWidth: 210,
		actualHeight: 297,
		contentWidth: 190,
    contentHeight: 277,
    cardInfoHeight: 25,
    essayCount: 22,
	}
}

export default Size;
