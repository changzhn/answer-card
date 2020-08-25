import * as React from 'react';
import QuestionType from '@/constants/QuestionType';
import { Union } from '@/tools/question2page';
import Title from '@/components/QuestionComponents/Title';
import TitleClass from '@/tools/QuestionClasses/TitleClass';
import AnswerQuestion from '@/components/QuestionComponents/AnswerQuestion';
import AnswerQuestionClass from '@/tools/QuestionClasses/AnswerQuestionClass';
import EssayQuestion from '@/components/QuestionComponents/EssayQuestion';
import EssayQuestionClass from '@/tools/QuestionClasses/EssayQuestionClass';
import ChoiceQuestion from '@/components/QuestionComponents/ChoiceQuestion';
import ChoiceQuestionCLass from '@/tools/QuestionClasses/ChoiceQuestionClass';
import FillBlankQuestion from '@/components/QuestionComponents/FillBlankQuestion';
import FillBlankClass from '@/tools/QuestionClasses/FillBlankClass';

export default function getComponent(component: Union, colWidth: number) {
  const { questionType, questionId } = component.question;
  switch(questionType) {
    case QuestionType.Title:
      return <Title key={questionId + 'changzhn'} component={(component as TitleClass)} colWidth={colWidth} />;

    case QuestionType.AnswerQuestion:
      return <AnswerQuestion key={questionId} component={(component as AnswerQuestionClass)} colWidth={colWidth} />;

    case QuestionType.EssayQuestion:
      return <EssayQuestion key={questionId} component={(component as EssayQuestionClass)} colWidth={colWidth} />;

    case QuestionType.Choices:
      return <ChoiceQuestion key={questionId} component={(component as ChoiceQuestionCLass)} colWidth={colWidth} />;

    case QuestionType.FillBlank:
      return <FillBlankQuestion key={questionId} component={(component as FillBlankClass)} colWidth={colWidth} />;
  }
}
