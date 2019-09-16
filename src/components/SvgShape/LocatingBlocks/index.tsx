import * as React from 'react';

export interface IProps {
  contentWidth: number;
  contentHeight: number;
}

const LocatingBlocks: React.SFC<IProps> = function ({ contentWidth, contentHeight }) {
  const width = 5;
  const height = 5;

  return (
    <>
      <rect width={width} height={height} x={-width} y={-height} fill="#000" />
      <rect width={width} height={height} x={-width} y={contentHeight} fill="#000" />
      <rect width={width} height={height} x={contentWidth} y={-height} fill="#000" />
    </>
  );
};

export default LocatingBlocks;
