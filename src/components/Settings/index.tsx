import * as React from 'react';
import { Drawer, Button, Icon, Collapse } from 'antd';
import styles from './index.css';
import * as events from './events';
import PaperTypeSetting from './components/PaperType';
import { IAction } from '@/types/interface';

const { settingBtn, settingBtnText } = styles;
const Panel = Collapse.Panel;

export interface IProps {
  dispatch: React.Dispatch<IAction>;
}

export interface IState {
  drawerVisible: boolean;
}

export default class Settings extends React.Component<IProps, IState> {
  public state = {
    drawerVisible: true,
  }

  public setDrawerVisible = (bool: boolean) => {
    this.setState({ drawerVisible: bool })
  }

  public render() {
    const { drawerVisible } = this.state;
    return (
      <div>
        <Drawer 
          // tslint:disable-next-line: jsx-no-lambda
          onClose={() => this.setDrawerVisible(false)}
          visible={drawerVisible}
          mask={false}
          width="600px"
        >
          <h3>答题卡设置</h3>
          <Collapse defaultActiveKey={['1', '2', '3']}>
            {/* <Panel header="纸型设置" key="1">
              <PaperTypeSetting paperTypeChange={events.paperTypeChange.bind(this)} />
            </Panel> */}
            <Panel header="This is panel header 2" key="2">
              2
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
          <Icon className={settingBtnText} type="setting" />
        </Button>
      </div>
    );
  }
}
