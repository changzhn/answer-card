import * as actionTypes from './actionTypes';

export const reducers = (
  state: GlobalValue.AnswerCardData,
  action: GlobalValue.Action,
) => {
  switch (action.type) {
    case actionTypes.CHANGE_PAPER_TYPE:
      return {
        ...state,
        paperType: action.payload.val,
      };
    case actionTypes.ADD_BIG_QUESTION:
      return {
        ...state,
        bigQuestionNumber: state.bigQuestionNumber + 1,
        questionNumber: state.questionNumber + action.payload.questionNumber,
        questions: [
          ...state.questions,
          action.payload,
        ],
      };
    default:
      return state;
  }
};
