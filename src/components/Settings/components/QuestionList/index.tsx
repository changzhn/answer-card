import * as React from 'react';
import { Button, List, Popconfirm } from 'antd';
import { GlobalContext } from '@/store';
import { DELETE_BIG_QUESTION } from '@/store/actionTypes';
import Utils from '@/utils/Utils';
import * as events from '../../events';

const { useContext } = React;

interface IQuestionListProps {
}

const QuestionList: React.FC<IQuestionListProps> = () => {
  const { cardData, dispatch } = useContext(GlobalContext);

  const delBigQuestion = (item: GlobalValue.IGeneralBigQuestionType) => {
    dispatch({
      type: DELETE_BIG_QUESTION,
      payload: item,
    });
  };

  return (
    <div>
      <List
      dataSource={cardData.questions}
      renderItem={item => (
        <List.Item
          actions={[
            <Button
              onClick={() => events.eventEmitter.emit('@openAQModal', item)}
            >编辑</Button>,
            <Popconfirm
              placement="topLeft"
              title="确定要删除该大题？"
              onConfirm={() => delBigQuestion(item)}
              okText="确定"
              cancelText="手滑了"
            >
              <Button  danger>Del</Button>
            </Popconfirm>

          ]}
        >
          {`${Utils.arabia2simplifiedChinese(`${item.questionNo}`)}、${item.questionTitle}`}
        </List.Item>
      )}
      locale={{
        emptyText: '赶快添加题目吧',
      }}
    />
    </div>
  );
};

export default QuestionList;
