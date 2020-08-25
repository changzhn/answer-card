import * as React from 'react';
import { Drawer, Button, Collapse } from 'antd';
import QuestionType from '@/constants/QuestionType';
import * as events from './events';
import PaperTypeSetting from './components/PaperType';
import AddQuestions from './components/AddQuestions';
import AddQuestionModal from './components/AddQuestionModal';
import styles from './index.css';

const { settingBtn, settingBtnText } = styles;
const Panel = Collapse.Panel;

export interface IProps {
  dispatch: React.Dispatch<GlobalValue.Action>;
  cardData: GlobalValue.AnswerCardData;
}

export interface IState {
  drawerVisible: boolean;
  addQuestionModalVisible: boolean;
  addQuestionType: QuestionType;
}

export default class Settings extends React.Component<IProps, IState> {
  public state = {
    drawerVisible: true,
    addQuestionModalVisible: false,
    addQuestionType: QuestionType.Choices,
  };

  public componentDidMount() {
    events.eventEmitter.on('@hideAQModal', events.hideAQModal.bind(this));
  }

  public setDrawerVisible = (bool: boolean) => {
    this.setState({ drawerVisible: bool })
  }

  public render() {
    const { drawerVisible, addQuestionModalVisible, addQuestionType } = this.state;

    return (
      <div>
        <Drawer
          onClose={() => this.setDrawerVisible(false)}
          visible={drawerVisible}
          mask={false}
          width="600px"
        >
          <h3>答题卡设置</h3>
          <Collapse defaultActiveKey={['1', '2', '3']}>
            <Panel header="纸型设置(暂不可用 )" key="1">
              <PaperTypeSetting paperTypeChange={events.paperTypeChange.bind(this)} />
            </Panel>
            <Panel header="添加题型" key="2">
              <AddQuestions addQuestion={events.addQuestion.bind(this)} />
            </Panel>
            <Panel header="This is panel header 3" key="3">
              3
            </Panel>
          </Collapse>
        </Drawer>

        <Button
          className={settingBtn}
          type="primary"
          // tslint:disable-next-line: jsx-no-lambda
          onClick={() => this.setDrawerVisible(true)}
        >
          {/* <Icon className={settingBtnText} type="setting" /> */}
        </Button>

        <AddQuestionModal
          visible={addQuestionModalVisible}
          questionType={addQuestionType}
        />
      </div>
    );
  }
}
