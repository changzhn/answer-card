import PaperType from '../constants/PaperType';
import ColumnNum from '../constants/ColumnNum';
import { IGeneralBigQuestionType, IGeneralQuestionType, ICardType } from '@/types/interface';
import QuestionType from '@/constants/QuestionType';

const choiceQuestion: IGeneralQuestionType = {
  questionId: '323',
  questionNo: 1,
  questionType: 3,
  height: 40,
  length: 4,
}

const anwerQuestion: IGeneralQuestionType = {
  questionId: '123',
  questionNo: 1,
  questionType: 3,
  height: 40,
  length: 800,
};

const essayQuestion: IGeneralQuestionType = {
  questionId: '223',
  questionNo: 1,
  questionType: QuestionType.EssayQuestion,
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
    {
      ...anwerQuestion,
      questionId: '1231',
      questionNo: 2,
    }
  ]
}

const bigEssayQuestion: IGeneralBigQuestionType = {
  questionId: '222',
  questionNo: 3,
  questionTitle: '作文题',
  questionType: QuestionType.EssayQuestion,
  questions: [
    essayQuestion,
  ]
}

const bigChoiceQuestion: IGeneralBigQuestionType = {
  questionId: '222222',
  questionNo: 1,
  questionTitle: '选择题',
  questionType: 1,
  groupSize: 5, // 以几个小题为1组
  questions: new Array(500).fill(0).map((_, idx) => ({...choiceQuestion, questionId: Math.random() + '', questionNo: idx + 1})),
}

const cardData: ICardType = {
  cardId: '10010',
  cardTitle: '测试答题卡',
  paperType: PaperType.A3,
  columnNum: ColumnNum.two,
  questions: [
    bigChoiceQuestion,
    bigAnswerQuestion,
    bigEssayQuestion,
  ]
};

const initState: ICardType = cardData;

export default {
  namespace: 'cardData',
  state: initState,
};
