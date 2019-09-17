import * as React from 'react';

interface IProps {
  x: number;
  y: number;
  width: number;
  height: number;
  text: string;
  align: 'center' | 'left';
  fontSize?: string;
}

const Text: React.SFC<IProps> = ({ x, y, width, height, text, align, fontSize = '3pt' }) => {
  const extraStyle: any = {};
  if (align === 'center') {
    extraStyle.textAnchor = 'middle';
  }

  return (
    <g transform={`translate(${x} ${y})`}>
      <rect x="0" y="0" width={width} height={height} fill="transparent" />
      <text
        x={align === 'center' ? width / 2 : 0}
        y={height / 1.5}
        width={width}
        height={height}
        style={{
          ...extraStyle,
          fontSize,
        }}
      >
        {text}
      </text>
    </g>
  );
};

export default Text;
