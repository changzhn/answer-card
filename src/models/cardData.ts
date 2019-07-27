import PaperType from '../constants/PaperType';
import ColumnNum from '../constants/ColumnNum';

const anwerQuestion = {
  questionId: 123,
  questionNo: 1,
  questionType: 3,
  height: 240,
};

const bigAnswerQuestion = {
  questionId: 222,
  questionNo: 1,
  questionTitle: '解答题',
  questionType: 3,
  questions: [
    anwerQuestion,
  ]
}

const cardData = {
  cardId: 10010,
  cardTitle: '测试答题卡',
  paperType: PaperType.A4,
  columnNum: ColumnNum.one,
  questions: [
    bigAnswerQuestion,
  ]
};

export type IAnswerQuestion = typeof anwerQuestion;
export type IBigQuestion = typeof bigAnswerQuestion;
export type ICardData = typeof cardData;

const initState: ICardData = cardData;

export default {
  namespace: 'cardData',
  state: initState,
};
