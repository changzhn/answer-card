import PageClass from './PageClass';

interface IReturnValue {
  currentPage: PageClass;
  nextQuestion: any;
}

export default abstract class BaseClass {
  public offsetY: number = 0;
  abstract splitSelf(currentPage: PageClass): IReturnValue;
}
