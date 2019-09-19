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
  const extraStyle: any = {
    dominantBaseline: 'middle',
  };
  if (align === 'center') {
    extraStyle.textAnchor = 'middle';
  }

  const fz = parseInt(fontSize);
  return (
    <g transform={`translate(${x}, ${y})`}>
      <rect x="0" y="0" width={width} height={height} fill="transparent" />
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
    </g>
  );
};

export default Text;
