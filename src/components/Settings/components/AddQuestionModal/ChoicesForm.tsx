import * as React from 'react';
import { Form, InputNumber, Button, Table } from 'antd';
import { IQuestionForm } from './getQuestionForm';

const { useState } = React;
const FormItem = Form.Item;

interface IChoicesFormProps extends IQuestionForm {
}

const ChoicesForm: React.FC<IChoicesFormProps> = ({ form }) => {
  const [questions, setQuestions] = useState<any[]>([]);
  return (
    <>
      <Form
        form={form}
        layout="inline"
        onFinish={() => console.log(form.getFieldValue('number'))}
        initialValues={{ number: 1 }}
      >
        <FormItem label="题目数量" name="number">
          <InputNumber
            min={1}
            max={200}
            formatter={val => val ? `${Number.parseInt(val as string)}` : val as string}
          />
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit">确定</Button>
        </FormItem>
      </Form>
      <br />
      <Table
        columns={[{
          title: '题号',
          dataIndex: 'questionNo',
        }, {
          title: '选项',
          render() {
            return '选项';
          }
        }, {
          title: '操作',
          render() {
            return '操作';
          }
        }]}
        dataSource={questions}
        locale={{
          emptyText: '赶快添加题目吧'
        }}
      />
    </>
  );
};

export default ChoicesForm;
