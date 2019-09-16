import * as React from 'react';

export interface IProps {
  startX: number;
  startY: number;
  contentWidth: number;
  contentHeight: number;
}

const LocatingBlocks: React.SFC<IProps> = function ({ contentWidth, contentHeight, startX, startY }) {
  const width = 5;
  const height = 5;

  return (
    <g
      transform={`translate(${startX}, ${startY})`}
    >
      <rect x="0" y="0" width={`${contentWidth}`} height={`${contentHeight}`} fill="transparent" />
      <rect width={width} height={height} x={-width} y={-height} fill="#000" />
      <rect width={width} height={height} x={-width} y={contentHeight} fill="#000" />
      <rect width={width} height={height} x={contentWidth} y={-height} fill="#000" />
    </g>
  );
};

export default LocatingBlocks;
