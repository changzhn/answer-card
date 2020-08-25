import * as React from 'react';
import TitleClass from '@/tools/QuestionClasses/TitleClass';
import Utils from '@/utils/Utils';
import Text from '../../Text';

interface IProps {
  component: TitleClass;
  colWidth: number;
}

const Title: React.SFC<IProps> = ({ component, colWidth }) => {
  const { offsetY, requiredHeight, questionTitle, questionNo } = component;

  return (
    <Text
      x={0}
      y={offsetY}
      width={colWidth}
      height={requiredHeight}
      text={`${Utils.arabia2simplifiedChinese(`${questionNo}`)}、${questionTitle}`}
      align="left"
      fontSize="3pt"
    />
  );
};

export default Title;
