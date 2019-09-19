import * as React from 'react';
import Text from '../Text';

interface IProps {
  contentHeight: number;
  colWidth: number;
  pageNo: number;
}

const PageNum: React.SFC<IProps> = ({ pageNo, contentHeight, colWidth }) => {
  return (
    <Text 
      x={0}
      y={contentHeight}
      width={colWidth}
      height={10}
      text={`第${pageNo}页`}
      align="center"
      fontSize="3pt"
    />
  );
};

export default PageNum;
