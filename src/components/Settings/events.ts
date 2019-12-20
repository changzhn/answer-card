import Settings from './index';
import QuestionType from '@/constants/QuestionType';

export function paperTypeChange(this: Settings, e: any) {
  const { dispatch } = this.props;
  dispatch({
    type: 'cardData/paperTypeChange',
    payload: {
      val: e.target.value,
    },
  })
}

export function addQuestion(this: Settings, type: QuestionType) {
  this.setState({
    addQuestionModalVisible: true,
    addQuestionType: type,
  });
}

export function hideAQModal(this: Settings) {
  this.setState({
    addQuestionModalVisible: false,
  });
}
