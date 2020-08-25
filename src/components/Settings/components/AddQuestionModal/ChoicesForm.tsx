import * as React from 'react';
import { Form, InputNumber } from 'antd';
import { IQuestionForm } from './getQuestionForm';

const FormItem = Form.Item;

interface IChoicesFormProps extends IQuestionForm {
}

const ChoicesForm: React.FC<IChoicesFormProps> = ({ form }) => {
  return (
    <Form form={form}>
      <FormItem>
        <InputNumber />
      </FormItem>
    </Form>
  );
};

export default ChoicesForm;
