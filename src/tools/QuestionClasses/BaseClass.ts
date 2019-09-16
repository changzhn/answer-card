import PageClass from './PageClass';
import TitleClass from './TitleClass';
import AnswerQuestionClass from './AnswerQuestionClass';

interface IReturnValue {
  currentPage: PageClass;
  nextQuestion: TitleClass | AnswerQuestionClass | null; // TODO:
}

export default abstract class BaseClass {
  public offsetY: number = 0;
  abstract splitSelf(currentPage: PageClass): IReturnValue;
}
