import PaperType from '@/constants/PaperType';
import QuestionType from '@/constants/QuestionType';
import Size from '@/constants/Size';
import ColumnNum from '@/constants/ColumnNum';
import { ICardData } from '@/models/cardData';
import AnswerQuestionClass from './QuestionClasses/AnswerQuestionClass';
import PageClass from './QuestionClasses/PageClass';

/**
 * 将题型数据分配到页面中
 * @param cardData 题卡数据
 * @param paperType 纸型信息
 */
function question2page(cardData: ICardData, paperType: PaperType) {
  let pages = [];
  let page = new PageClass({
    contentHeight: 277,
    pageNo: 1,
   });
  const { questions } = cardData;

  if (!Array.isArray(questions)) {
    throw Error('数据有问题!');
  }

  /**
   * 闭包函数，将题插入到页面
   * @param computedQuestion 要计算的题
   */
  function walk(computedQuestion) {
    const currentPage = computeHeight(page, computedQuestion);
    pages.push(currentPage);
  }

  questions.forEach(bigQuestion => {
    const { questionType } = bigQuestion;
    switch(questionType) {
      case QuestionType.AnswerQuestion:
        bigQuestion.questions.forEach(subQuestion => walk(new AnswerQuestionClass(subQuestion)));
        break;
      default:

    }
  });

  return pages;
}

function computeHeight(currentPage: PageClass, computedQuestion) {
  if (currentPage.availableHeight >= computedQuestion.requiredHeight) {
    currentPage.components.push(computedQuestion);
  }

  return currentPage;
}

export default question2page;
