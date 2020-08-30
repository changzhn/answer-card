import * as React from 'react';
import { Modal, Form } from 'antd';
import QuestionType, { questionTitle } from '@/constants/QuestionType';
import getQuestionForm from './getQuestionForm';
import { eventEmitter } from '../../events';

interface IProps {
  visible: boolean;
  questionType: QuestionType;
  editBigQuestion?: any;
}

const AddQuestionModal: React.FC<IProps> = ({
  visible,
  questionType,
  editBigQuestion,
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
      destroyOnClose
    >
      <FormComp
        form={form}
        editBigQuestion={editBigQuestion}
      />
    </Modal>
  );
};

export default AddQuestionModal;
