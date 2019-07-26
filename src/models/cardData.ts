
const anwerQuestion = {
  questionId: 123,
  questionNo: 1,
  questionType: 3,
  height: 80,
};

const cardData = {
  questions: [
    {
      questionId: 222,
      questionNo: 1,
      questionTitle: '解答题',
      questionType: 3,
      questions: [
        anwerQuestion,
      ]
    }
  ]
};

export type IAnswerQuestion = typeof anwerQuestion;
export type ICardData = typeof cardData;

const initState: ICardData = cardData;

export default {
  namespace: 'cardData',
  state: initState,
};
