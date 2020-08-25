import * as React from 'react';
import { Modal, Form } from 'antd';
import QuestionType, { questionTitle } from '@/constants/QuestionType';
import getQuestionForm from './getQuestionForm';

interface IProps {
  visible: boolean;
  onCancel: () => void;
  questionType: QuestionType;
}

const AddQuestionModal: React.FC<IProps> = (props) => {
  const { visible, onCancel, questionType } = props;
  const [form] = Form.useForm();
  const FormComp = getQuestionForm(questionType);
  return (
    <Modal
      visible={visible}
      onCancel={onCancel}
      footer={false}
      title={questionTitle[questionType]}
    >
      <FormComp form={form} />
    </Modal>
  );
};

export default AddQuestionModal;
