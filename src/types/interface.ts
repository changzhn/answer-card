import ColumnNum from '@/constants/ColumnNum';
import PaperType from '@/constants/PaperType';

export interface IGeneralQuestionType {
  height: number;
  length: number;
  questionId: string;
  questionNo: number;
  questionType: number;
};

export interface IFillBlankQuestionType {
  rowId: string;
  height: number;
  group: IGeneralQuestionType[]
};

export interface IGeneralBigQuestionType {
  questionId: string;
  questionNo: number;
  questions: IGeneralQuestionType[] | IFillBlankQuestionType[];
  questionTitle: string;
  questionType: number;
  groupSize?: number; // 选择题一组的小题数
};

export interface ICardType {
  cardId: string;
  cardTitle: string;
  paperType: PaperType;
  columnNum: ColumnNum;
  questions: IGeneralBigQuestionType[];
};

export interface IAction {
  type: string;
  payload: any;
};
