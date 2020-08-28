import * as React from 'react';
import { Button, List } from 'antd';
import { GlobalContext } from '@/store';
import Utils from '@/utils/Utils';

const { useContext } = React;

interface IQuestionListProps {
}

const QuestionList: React.FC<IQuestionListProps> = () => {
  const { cardData } = useContext(GlobalContext);

  const delBigQuestion = () => {

  };

  return (
    <div>
      <List
      dataSource={cardData.questions}
      renderItem={item => (
        <List.Item
          actions={[
            <Button danger>Del</Button>
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
