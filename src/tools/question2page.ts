import PaperType from '@/constants/PaperType';
import QuestionType from '@/constants/QuestionType';
import Size from '@/constants/Size';
import ColumnNum from '@/constants/ColumnNum';
import { ICardData } from '@/models/cardData';
import PageClass from './QuestionClasses/PageClass';
import AnswerQuestionClass from './QuestionClasses/AnswerQuestionClass';
import TitleClass from './QuestionClasses/TitleClass';

type Union = TitleClass | AnswerQuestionClass;

/**
 * 将题型数据分配到页面中
 * @param cardData 题卡数据
 * @param paperType 纸型信息
 */
function question2page(cardData: ICardData, paperType: PaperType) {
  let pages = [];
  let page = new PageClass(277, 1);
  const { questions } = cardData;

  if (!Array.isArray(questions)) {
    throw Error('数据有问题!');
  }

  /**
   * 闭包函数，将题插入到页面
   * @param computedQuestion 要计算的题
   */
  function walk(computedQuestion: Union) {
    let { currentPage, nextPage } = computeHeight(page, computedQuestion);
    if (nextPage) {
      pages.push(currentPage);
      page = nextPage;
    } else {
      page = currentPage;
    }
  }

  questions.forEach(bigQuestion => {
    const { questionType } = bigQuestion;
    walk(new TitleClass(bigQuestion));
    switch(questionType) {
      case QuestionType.AnswerQuestion:
        bigQuestion.questions.forEach(subQuestion => walk(new AnswerQuestionClass(subQuestion)));
        break;
      default:

    }
  });

  pages.push(page);
  return pages;
}

function computeHeight(currentPage: PageClass, computedQuestion: Union) {
  let nextPage = null;
  if (currentPage.availableHeight >= computedQuestion.requiredHeight) {
    currentPage.components.push(computedQuestion);
    currentPage.availableHeight -= computedQuestion.requiredHeight;
  } else { // 需要分页处理
    const res = computedQuestion.splitSelf(currentPage)
    currentPage = res.currentPage;
    nextPage = res.nextPage;
  }

  return {currentPage, nextPage};
}

export default question2page;
