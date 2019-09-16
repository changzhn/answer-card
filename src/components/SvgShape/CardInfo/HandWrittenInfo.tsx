import * as React from 'react';
import Text from '../Text';

interface IProps {
  colWidth: number;
}

const texts = [
  '姓名：______________',
  '班级：______________',
  '座位号：____________',
]

const HandWrittenInfo: React.SFC<IProps> = ({ colWidth }) => {
  const height = 10;
  const perWidth = colWidth / 3;
  return (
    <g transform="translate(0, 10)">
      <rect x="0" y="0" width={colWidth} height={height} fill="transparent" />
      {
        texts.map((t, idx) => (
          <Text 
            key={t}
            x={perWidth * idx}
            y={0}
            width={perWidth}
            height={height}
            text={t}
            align="left"
            fontSize="3pt"
          />
        ))
      }
    </g>
  );
}

export default HandWrittenInfo;
