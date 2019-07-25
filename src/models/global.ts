import PaperType from '../constants/PaperType';
import ColumnNum from '../constants/ColumnNum';

export interface IGlobalState {
  paperType: PaperType;
  columnNum: ColumnNum;
}

const initState: IGlobalState = {
  paperType: PaperType.A4,
  columnNum: ColumnNum.one,
}

export default {
  namespace: 'global',
  state: initState,
  reducers: {

  }
}
