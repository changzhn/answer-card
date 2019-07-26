import * as React from 'react';
import QuestionType from '@/constants/QuestionType';
import Title from '@/components/QuestionComponents/Title';
import AnswerQuestion from '@/components/QuestionComponents/AnswerQuestion';

export default function getComponent(component) {
  const { questionType, questionId } = component.question;
  switch(questionType) {
    case QuestionType.Title:
      return <Title key={questionId} component={component}/>;

    case QuestionType.AnswerQuestion:
      return <AnswerQuestion key={questionId} component={component}/>;
  }
}
