import QuestionType from '@/constants/QuestionType';

export default class TitleClass {
  constructor(question) {
    this.question = {
      ...question,
      questionType: QuestionType.Title,
    };
    this.requiredHeight = 8;
  }
}
