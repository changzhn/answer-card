import Utils from '@/utils/Utils';
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
    case actionTypes.DELETE_BIG_QUESTION:
      // bigQuestionNumber - 1
      // questionNumber 减相应值
      // 该题后面重排序号
      const delBigQuestion = action.payload;
      state.bigQuestionNumber -= 1;
      state.questionNumber -= delBigQuestion.questionNumber;
      state.questions = Utils.reorderNo(state.questions.filter(item => item !== delBigQuestion));
      return {
        ...state,
      };
    default:
      return state;
  }
};
