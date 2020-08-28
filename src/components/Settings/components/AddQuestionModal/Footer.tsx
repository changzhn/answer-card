import * as React from 'react';
import { Button } from 'antd';

import styles from './Footer.less';

const Footer: React.FC<{onOk: () => void}> = ({ onOk }) => {
  return (
    <div className={styles.footerContainer}>
      <Button onClick={onOk} type="primary">确定</Button>
    </div>
  );
};

export default Footer;
