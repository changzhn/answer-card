import ColumnNum from '@/constants/ColumnNum';
import PaperType from '@/constants/PaperType';

export interface IGeneralQuestionType {
  height: number;
  length: number;
  questionId: string;
  questionNo: number;
  questionType: number;
};

export interface IGeneralBigQuestionType {
  questionId: string;
  questionNo: number;
  questions: IGeneralQuestionType[];
  questionTitle: string;
  questionType: number;
};

export interface ICardType {
  cardId: string;
  cardTitle: string;
  paperType: PaperType;
  columnNum: ColumnNum;
  questions: IGeneralBigQuestionType[];
};
