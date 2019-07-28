import * as React from 'react';
import styles from './index.css';
import FillBlock from '@/components/FillBlock';

const { choiceWrapper, choiceGroup, choiceRow, choiceNo } = styles;

const ChoiceQuestion: React.SFC = props => {
  return (
    <div className={choiceWrapper}>
      <div className={choiceGroup}>
        <div className={choiceRow}>
          <span className={choiceNo}>1</span>
          <FillBlock>A</FillBlock>
          <FillBlock>B</FillBlock>
          <FillBlock>C</FillBlock>
          <FillBlock>D</FillBlock>
        </div>
      </div>
    </div>
  )
}

export default ChoiceQuestion;
