import { EventEmitter } from 'events';
import Settings from './index';
import QuestionType from '@/constants/QuestionType';
import * as actionTypes from '@/store/actionTypes';

export function paperTypeChange(this: Settings, e: any) {
  const { dispatch } = this.props;
  dispatch({
    type: actionTypes.CHANGE_PAPER_TYPE,
    payload: {
      val: e.target.value,
    },
  })
}

export function addQuestion(this: Settings, type: QuestionType, bigQuestion?: any) {
  this.setState({
    addQuestionModalVisible: true,
    addQuestionType: type,
    editBigQuestion: bigQuestion,
  });
}

export function hideAQModal(this: Settings) {
  this.setState({
    addQuestionModalVisible: false,
  });
}

export const eventEmitter = new EventEmitter();
