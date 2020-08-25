import * as React from 'react';
import { Radio } from 'antd';
import PaperType from '@/constants/PaperType';

interface IProps {
  paperTypeChange: (type: any) => void;
}

const options = [
  { label: 'A4', value: PaperType.A4 },
  { label: 'A3', value: PaperType.A3 },
];

const PaperTypeComp: React.SFC<IProps> = ({ paperTypeChange }) => {
  return (
    <div>
      <Radio.Group
        options={options}
        onChange={paperTypeChange}
        defaultValue={PaperType.A3}
      />
    </div>
  );
};

export default PaperTypeComp;
