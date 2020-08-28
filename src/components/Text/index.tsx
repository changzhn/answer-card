import * as React from 'react';

interface IProps {
  x: number;
  y: number;
  width: number;
  height: number;
  text: string | number;
  align: 'center' | 'left';
  fontSize?: string;
  border?: boolean;
  bottom?: boolean;
}

const Text: React.SFC<IProps> = ({ x, y, width, height, text, align, fontSize = '3pt', border = false, bottom = false }) => {
  const extraStyle: any = {
    dominantBaseline: 'middle',
  };
  if (align === 'center') {
    extraStyle.textAnchor = 'middle';
  }

  let borderStyle = {};

  if (border) {
    borderStyle = {
      stroke: '#000',
      strokeWidth: '0.2',
    };
  }

  return (
    <g transform={`translate(${x}, ${y})`}>
      <rect x="0" y="0" width={width} height={height} fill="transparent" {...borderStyle} />
      <text
        x={align === 'center' ? width / 2 : 0}
        y={height / 2}
        width={width}
        height={height}
        style={{
          ...extraStyle,
          fontSize,
        }}
      >
        {text}
      </text>
      {bottom && <line x1="0" y1={height - 1} x2={width} y2={height - 1} strokeWidth="0.2" stroke="#000" />}
    </g>
  );
};

export default Text;
