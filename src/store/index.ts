import PaperType from '@/constants/PaperType';
import ColumnNum from '@/constants/ColumnNum';
export { reducers } from './reducers';

export const initialGlobalValue: GlobalValue.AnswerCardData = {
  cardId: '10010',
  cardTitle: 'ABCDEFG',
  paperType: PaperType.A3,
  columnNum: ColumnNum.two,
  bigQuestionNumber: 0,
  questionNumber: 0,
  questions: [],
};
