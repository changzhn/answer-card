import { ICardData } from '@/models/cardData';
import { IGlobalState } from '@/models/global';

interface IModelState {
  global: IGlobalState,
  cardData: ICardData,
}

export default IModelState;
