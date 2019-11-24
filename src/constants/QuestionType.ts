
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

export default QuestionType;
