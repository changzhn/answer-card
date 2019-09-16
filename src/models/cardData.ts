import PaperType from '../constants/PaperType';
import ColumnNum from '../constants/ColumnNum';
import { IGeneralBigQuestionType, IGeneralQuestionType, ICardType } from '@/types/interface';

const choiceQuestion = {
  questionId: 323,
  questionNo: 1,
  questionType: 3,
  height: 40,
  length: 4,
}

const anwerQuestion: IGeneralQuestionType = {
  questionId: '123',
  questionNo: 1,
  questionType: 3,
  height: 400,
  length: 800,
};

const essayQuestion = {
  questionId: 223,
  questionNo: 1,
  questionType: 4,
  length: 800,
  height: 40,
};

const bigAnswerQuestion: IGeneralBigQuestionType = {
  questionId: '111',
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
  groupSize: 5, // 以几个小题为1组
  questions: new Array(50).fill(0).map((_, idx) => ({...choiceQuestion, questionId: Math.random(), questionNo: idx + 1})),
}

const cardData: ICardType = {
  cardId: '10010',
  cardTitle: '测试答题卡',
  paperType: PaperType.A4,
  columnNum: ColumnNum.one,
  questions: [
    // bigChoiceQuestion,
    bigAnswerQuestion,
    // bigEssayQuestion,
  ]
};

// export type IAnswerQuestion = typeof anwerQuestion;
// export type IBigQuestion = typeof bigAnswerQuestion | typeof bigEssayQuestion | typeof bigChoiceQuestion;
// export type ICardData = typeof cardData;

const initState: ICardType = cardData;

export default {
  namespace: 'cardData',
  state: initState,
};
