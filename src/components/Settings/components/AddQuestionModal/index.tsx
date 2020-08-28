import * as React from 'react';
import { Modal, Form } from 'antd';
import QuestionType, { questionTitle } from '@/constants/QuestionType';
import getQuestionForm from './getQuestionForm';
import { eventEmitter } from '../../events';

interface IProps {
  visible: boolean;
  questionType: QuestionType;
}

const AddQuestionModal: React.FC<IProps> = ({
  visible,
  questionType,
}) => {
  const [form] = Form.useForm();
  const FormComp = getQuestionForm(questionType);

  return (
    <Modal
      visible={visible}
      footer={false}
      onCancel={() => eventEmitter.emit('@hideAQModal')}
      width={600}
      title={questionTitle[questionType]}
    >
      <FormComp
        form={form}
      />
    </Modal>
  );
};

export default AddQuestionModal;
