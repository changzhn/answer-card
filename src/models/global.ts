import PaperType from '../constants/PaperType';

export interface IGlobalState {
  paperType: PaperType;
}

const initState: IGlobalState = {
  paperType: PaperType.A4,
}

export default {
  namespace: 'global',
  state: initState,
  reducers: {

  }
}
