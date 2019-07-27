import PageClass from './PageClass';

interface IReturnValue {
  currentPage: PageClass;
  nextPage: PageClass;
}

export default abstract class BaseClass {
  abstract splitSelf(currentPage: PageClass): IReturnValue;
}
