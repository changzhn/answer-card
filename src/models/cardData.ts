import PaperType from '../constants/PaperType';
import ColumnNum from '../constants/ColumnNum';

const anwerQuestion = {
  questionId: 123,
  questionNo: 1,
  questionType: 3,
  height: 40,
  length: 800,
};

const essayQuestion = {
  questionId: 223,
  questionNo: 1,
  questionType: 4,
  length: 80,
  height: 40,
};

const bigAnswerQuestion = {
  questionId: 111,
  questionNo: 1,
  questionTitle: '解答题',
  questionType: 3,
  questions: [
    anwerQuestion,
  ]
}

const bigEssayQuestion = {
  questionId: 222,
  questionNo: 2,
  questionTitle: '作文题',
  questionType: 4,
  questions: [
    essayQuestion,
  ]
}

const cardData = {
  cardId: 10010,
  cardTitle: '测试答题卡',
  paperType: PaperType.A4,
  columnNum: ColumnNum.one,
  questions: [
    bigAnswerQuestion,
    bigEssayQuestion,
  ]
};

export type IAnswerQuestion = typeof anwerQuestion;
export type IBigQuestion = typeof bigAnswerQuestion | typeof bigEssayQuestion;
export type ICardData = typeof cardData;

const initState: ICardData = cardData;

export default {
  namespace: 'cardData',
  state: initState,
};
