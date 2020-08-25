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
      }
  }
  return state;
};
