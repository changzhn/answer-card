import PaperType from '../constants/PaperType';
import ColumnNum from '../constants/ColumnNum';

const choiceQuestion = {
  questionId: 323,
  questionNo: 1,
  questionType: 3,
  height: 40,
  length: 800,
}

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
  length: 200,
  height: 40,
};

const bigAnswerQuestion = {
  questionId: 111,
  questionNo: 2,
  questionTitle: '解答题',
  questionType: 3,
  questions: [
    anwerQuestion,
  ]
}

const bigEssayQuestion = {
  questionId: 222,
  questionNo: 3,
  questionTitle: '作文题',
  questionType: 4,
  questions: [
    essayQuestion,
  ]
}

const bigChoiceQuestion = {
  questionId: 222222,
  questionNo: 1,
  questionTitle: '选择题',
  questionType: 1,
  questions: [
    choiceQuestion,
  ]
}

const cardData = {
  cardId: 10010,
  cardTitle: '测试答题卡',
  paperType: PaperType.A4,
  columnNum: ColumnNum.one,
  questions: [
    bigChoiceQuestion,
    bigAnswerQuestion,
    bigEssayQuestion,
  ]
};

export type IAnswerQuestion = typeof anwerQuestion;
export type IBigQuestion = typeof bigAnswerQuestion | typeof bigEssayQuestion | typeof bigChoiceQuestion;
export type ICardData = typeof cardData;

const initState: ICardData = cardData;

export default {
  namespace: 'cardData',
  state: initState,
};
