import * as React from 'react';
import { Modal, Form } from 'antd';
import QuestionType, { questionTitle } from '@/constants/QuestionType';
import getQuestionForm from './getQuestionForm';

interface IProps {
  visible: boolean;
  onCancel: () => void;
  cardData: GlobalValue.AnswerCardData;
  questionType: QuestionType;
}

const AddQuestionModal: React.FC<IProps> = (props) => {
  const { visible, onCancel, questionType, cardData } = props;
  const [form] = Form.useForm();
  const FormComp = getQuestionForm(questionType);
  return (
    <Modal
      visible={visible}
      onCancel={onCancel}
      footer={false}
      width={600}
      title={questionTitle[questionType]}
    >
      <FormComp
        form={form}
        questionNumber={cardData.questionNumber}
      />
    </Modal>
  );
};

export default AddQuestionModal;
