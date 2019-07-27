import { IAnswerQuestion } from '@/models/cardData'

export default class AnswerQuestionClass {
  question: IAnswerQuestion;
  requiredHeight: number;
  
  public constructor(question: IAnswerQuestion) {
    this.question = question;
    // 计算该解答题需要的空间
    this.requiredHeight = this.getRequiredHeight(question);
  }

  public getRequiredHeight(question: IAnswerQuestion) {
    return question.height;
  }
};
