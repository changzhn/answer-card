import * as React from 'react';
import { Form, Input } from 'antd';
import { FormComponentProps } from 'antd/lib/form/Form';

const FormItem = Form.Item;

interface IChoicesFormProps extends FormComponentProps {
}

const ChoicesForm: React.FunctionComponent<IChoicesFormProps> = (props) => {
  const { form } = props;
  const { getFieldDecorator } = form;
  return (
    <Form>
      <FormItem>
        {
          getFieldDecorator('x')(
            <Input />
          )
        }
      </FormItem>
    </Form>
  );
};

export default ChoicesForm;
