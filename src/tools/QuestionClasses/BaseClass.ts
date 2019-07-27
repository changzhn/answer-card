import PageClass from './PageClass';

interface IReturnValue {
  currentPage: PageClass;
  nextQuestion: any; // TODO:
}

export default abstract class BaseClass {
  abstract splitSelf(currentPage: PageClass): IReturnValue;
}
