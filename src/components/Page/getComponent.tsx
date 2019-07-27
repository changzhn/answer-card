import * as React from 'react';
import QuestionType from '@/constants/QuestionType';
import Title from '@/components/QuestionComponents/Title';
import AnswerQuestion from '@/components/QuestionComponents/AnswerQuestion';
import { Union } from '@/tools/question2page';
import TitleClass from '@/tools/QuestionClasses/TitleClass';
import AnswerQuestionClass from '@/tools/QuestionClasses/AnswerQuestionClass';
import EssayQuestion from '../QuestionComponents/EssayQuestion';
import EssayQuestionClass from '@/tools/QuestionClasses/EssayQuestionClass';

export default function getComponent(component: Union) {
  const { questionType, questionId } = component.question;
  switch(questionType) {
    case QuestionType.Title:
      return <Title key={questionId} component={(component as TitleClass)}/>;

    case QuestionType.AnswerQuestion:
      return <AnswerQuestion key={questionId} component={(component as AnswerQuestionClass)}/>;

    case QuestionType.EssayQuestion:
      return <EssayQuestion key={questionId} component={(component as EssayQuestionClass)} />;
  }
}
