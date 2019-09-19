import * as React from 'react';
import Text from '../Text';

interface IProps {
  colWidth: number;
  cardTitle: string;
}

const CardTitle: React.FunctionComponent<IProps> = ({ colWidth, cardTitle }) => {
  return (
    <Text 
      x={0}
      y={0}
      width={colWidth}
      height={10}
      text={cardTitle}
      align="center"
      fontSize="4pt"
    />
  );
};

export default CardTitle;
