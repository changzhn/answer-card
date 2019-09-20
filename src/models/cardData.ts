import PaperType from '../constants/PaperType';
import ColumnNum from '../constants/ColumnNum';
import { IGeneralBigQuestionType, IGeneralQuestionType, ICardType, IFillBlankQuestionType } from '@/types/interface';
import QuestionType from '@/constants/QuestionType';

const choiceQuestion: IGeneralQuestionType = {
  questionId: '323',
  questionNo: 1,
  questionType: 3,
  height: 10,
  length: 4,
};

function createFillBlankQuestion() {
  const fillBlankQuestion: IGeneralQuestionType = {
    questionId: Math.random() + '',
    questionNo: 1,
    questionType: QuestionType.FillBlank,
    height: 10,
    length: 4,
  };
  return fillBlankQuestion;
}

const bigFillBlankQuestion: IGeneralBigQuestionType = {
  questionId: '1191',
  questionNo: 6,
  questionTitle: '填空题',
  questionType: QuestionType.FillBlank,
  questions: [
    {
      rowId: Math.random() + '',
      height: 10,
      group: [createFillBlankQuestion(), createFillBlankQuestion()]
    },
    {
      rowId: Math.random() + '',
      height: 10,
      group: [createFillBlankQuestion(), createFillBlankQuestion()]
    },
    {
      rowId: Math.random() + '',
      height: 10,
      group: [createFillBlankQuestion(), createFillBlankQuestion()]
    },
    {
      rowId: Math.random() + '',
      height: 10,
      group: [createFillBlankQuestion(), createFillBlankQuestion()]
    },
    {
      rowId: Math.random() + '',
      height: 10,
      group: [createFillBlankQuestion(), createFillBlankQuestion()]
    },
    {
      rowId: Math.random() + '',
      height: 10,
      group: [createFillBlankQuestion(), createFillBlankQuestion()]
    },
    {
      rowId: Math.random() + '',
      height: 10,
      group: [createFillBlankQuestion(), createFillBlankQuestion()]
    },
  ] as IFillBlankQuestionType[]
}

const anwerQuestion: IGeneralQuestionType = {
  questionId: '123',
  questionNo: 1,
  questionType: 3,
  height: 70,
  length: 800,
};

const essayQuestion: IGeneralQuestionType = {
  questionId: '223',
  questionNo: 1,
  questionType: QuestionType.EssayQuestion,
  length: 800,
  height: 10,
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
  questions: new Array(200).fill(0).map((_, idx) => ({...choiceQuestion, questionId: Math.random() + '', questionNo: idx + 1})),
}

const cardData: ICardType = {
  cardId: '10010',
  cardTitle: '测试答题卡',
  paperType: PaperType.A3,
  columnNum: ColumnNum.two,
  questions: [
    bigChoiceQuestion,
    bigFillBlankQuestion,
    bigAnswerQuestion,
    bigEssayQuestion,
  ]
};

const initState: ICardType = cardData;

export default {
  namespace: 'cardData',
  state: initState,
};
