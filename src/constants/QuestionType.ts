
enum QuestionType {
  Title,
  Choices,
  FillBlank,
  AnswerQuestion,
  EssayQuestion,
};

export const questions = [
  { label: '选择题', value: QuestionType.Choices },
  { label: '填空题', value: QuestionType.FillBlank },
  { label: '解答题', value: QuestionType.AnswerQuestion },
  { label: '作文题', value: QuestionType.EssayQuestion },
];

export const questionTitle = {
  [QuestionType.Title]: '题目',
  [QuestionType.Choices]: '选择题',
  [QuestionType.FillBlank]: '填空题',
  [QuestionType.AnswerQuestion]: '解答题',
  [QuestionType.EssayQuestion]: '作文题',
};

export default QuestionType;
