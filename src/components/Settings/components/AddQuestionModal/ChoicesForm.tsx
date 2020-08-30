import * as React from 'react';
import { Form, InputNumber, Button, Table } from 'antd';
import { v4 as uuid } from 'uuid';
import letters from '@/constants/letters';
import { GlobalContext } from '@/store';
import { ADD_BIG_QUESTION } from '@/store/actionTypes';
import { IQuestionForm } from './getQuestionForm';
import Footer from './Footer';
import { eventEmitter } from '../../events';

const { useState, useContext, useEffect } = React;
const FormItem = Form.Item;
const MAX_SIZE = 200;

let bigQuestion: GlobalValue.IGeneralBigQuestionType = {
  questionId: '',
  questionNo: 1,
  questionTitle: '选择题',
  questionType: 1,
  questionNumber: 0,
  // 以几个小题为1组
  groupSize: 5,
  questions: [],
};

const subQuestion: GlobalValue.IGeneralQuestionType = {
  questionId: '',
  questionNo: 1,
  questionType: 3,
  height: 5,
  length: 4,
};

interface IChoicesFormProps extends IQuestionForm {
}

const ChoicesForm: React.FC<IChoicesFormProps> = ({
  form,
  editBigQuestion,
}) => {
  const { cardData, dispatch } = useContext(GlobalContext);
  const [questions, setQuestions] = useState<Array<GlobalValue.IGeneralQuestionType>>([]);

  useEffect(() => {
    form.setFieldsValue({ number: 10 });
  }, []);

  useEffect(() => {
    if (editBigQuestion) {
      bigQuestion = editBigQuestion;
      setQuestions(editBigQuestion.questions);
    }
  }, [editBigQuestion]);

  const changeNumber = () => {
    let number = form.getFieldValue('number');
    if (number > MAX_SIZE) {
      number = MAX_SIZE;
    }
    const currentNumber = questions.length;
    if (number === currentNumber) {
      return;
    }
    let newQuestions: Array<GlobalValue.IGeneralQuestionType> = [];
    if (number > currentNumber) {
      const deltaNumber = number - currentNumber;
      newQuestions = questions.concat(new Array(deltaNumber).fill(0).map((_, idx) =>
        ({
          ...subQuestion,
          questionId: uuid(),
          questionNo: cardData.questionNumber + currentNumber + idx + 1,
        })));
    } else if (number < currentNumber) {
      newQuestions = questions.slice(0, number);
    }
    setQuestions(newQuestions);
  };

  const increaseOptions = (questionId: string) => {
    const newQuestions = questions.map(q => {
      if (q.questionId === questionId) {
        if (q.length < 10) {
          q.length += 1;
        }
      }
      return q;
    });
    setQuestions(newQuestions);
  };

  const decreaseOptions = (questionId: string) => {
    const newQuestions = questions.map(q => {
      if (q.questionId === questionId) {
        if (q.length > 4) {
          q.length -= 1;
        }
      }
      return q;
    });
    setQuestions(newQuestions);
  };

  const deleteSubQuestion = (delQuestion: GlobalValue.IGeneralQuestionType) => {
    const delIndex = questions.indexOf(delQuestion);
    for(let i = delIndex + 1; i < questions.length; i++) {
      questions[i].questionNo -= 1;
    }
    questions.splice(delIndex, 1);
    setQuestions([...questions]);
  };

  const handleConfirm = () => {
    const bq = {
      ...bigQuestion,
      questionId: uuid(),
      questionNo: cardData.bigQuestionNumber + 1,
      questionNumber: questions.length,
      questions,
    };
    dispatch({
      type: ADD_BIG_QUESTION,
      payload: bq,
    });
    eventEmitter.emit('@hideAQModal');
  };

  return (
    <>
      <Form
        form={form}
        layout="inline"
        onFinish={changeNumber}
        initialValues={{ number: 10 }}
      >
        <FormItem label="题目数量" name="number">
          <InputNumber
            min={1}
            max={MAX_SIZE}
            formatter={val => val ? `${Number.parseInt(val as string)}` : val as string}
          />
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit">确定</Button>
        </FormItem>
      </Form>
      <br />
      <Table
        rowKey="questionId"
        columns={[{
          title: '题号',
          width: '20%',
          dataIndex: 'questionNo',
        }, {
          title: '选项',
          width: '40%',
          render(_, { length }) {
            return letters.slice(0, length);
          }
        }, {
          title: '操作',
          width: '40%',
          render(_, record) {
            const { questionId } = record;
            return (
              <>
                <Button onClick={() => increaseOptions(questionId)}>+</Button> &nbsp;
                <Button onClick={() => decreaseOptions(questionId)}>-</Button> &nbsp;
                <Button onClick={() => deleteSubQuestion(record)} danger>Del</Button>
              </>
            );
          }
        }]}
        dataSource={questions}
        locale={{
          emptyText: '赶快添加题目吧'
        }}
        scroll={{
          y: 300,
        }}
        pagination={{
          pageSize: 30,
        }}
      />
      <br />
      <Footer onOk={handleConfirm} />
    </>
  );
};

export default ChoicesForm;
