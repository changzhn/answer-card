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

  const fz = parseInt(fontSize);
  return (
    <g transform={`translate(${x}, ${y})`}>
      <rect x="0" y="0" width={width} height={height} fill="transparent" {...borderStyle} />
      <text
        x={align === 'center' ? width / 2 : 0}
        y={fz * 0.9 * (1.35 / 3) + ((height - 5) / 2)}
        width={width}
        height={height}
        style={{
          ...extraStyle,
          fontSize,
        }}
      >
        {text}
      </text>
      {bottom && <line x1="0" y1={height} x2={width} y2={height} strokeWidth="0.2" stroke="#000" />}
    </g>
  );
};

export default Text;
