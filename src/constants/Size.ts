import PaperType from './PaperType';

const Size = {
	[PaperType.A4]: {
		actualWidth: 210,
		actualHeight: 297,
		contentWidth: 190,
		contentHeight: 277,
	}
}

export type ISizeItem = typeof Size[PaperType.A4];

export default Size;
