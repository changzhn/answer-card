
const anwerQuestion = {
  questionNo: 1,
  height: 80,
};

const cardData = {
  questions: [
    {
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
