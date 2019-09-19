import PaperType from '@/constants/PaperType';
import QuestionType from '@/constants/QuestionType';
import Size from '@/constants/Size';
import PageClass from './QuestionClasses/PageClass';
import AnswerQuestionClass from './QuestionClasses/AnswerQuestionClass';
import TitleClass from './QuestionClasses/TitleClass';
import EssayQuestionClass from './QuestionClasses/EssayQuestionClass';
import ChoiceQuestionCLass from './QuestionClasses/ChoiceQuestionClass';
import { IGeneralBigQuestionType, IGeneralQuestionType, ICardType } from '@/types/interface';

export type Union = TitleClass | AnswerQuestionClass | EssayQuestionClass | ChoiceQuestionCLass;

/**
 * 将题型数据分配到页面中
 * @param cardData 题卡数据
 */
function question2page(cardData: ICardType) {
  const pages: PageClass[] = [];
  const { paperType } = cardData;
  let page = new PageClass(paperType, 1);
  const { questions } = cardData;

  if (!Array.isArray(questions)) {
    throw Error('数据有问题!');
  }

  /**
   * 闭包函数，将题插入到页面
   * @param computedQuestion 要计算的题
   */
  function walk(computedQuestion: Union): any {
    let { currentPage, nextQuestion } = computeHeight(page, computedQuestion);
    if (nextQuestion) {
      pages.push(currentPage);
      page = new PageClass(paperType, currentPage.pageNo + 1);
      return walk(nextQuestion);
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
      case QuestionType.EssayQuestion:
        bigQuestion.questions.forEach(subQuestion => walk(new EssayQuestionClass(subQuestion, cardData.paperType)));
        break;
      case QuestionType.Choices: // 选择题需要统一去处理
        walk(new ChoiceQuestionCLass(bigQuestion, cardData.paperType));
      default:
    }
  });

  pages.push(page);
  return pages;
}

function computeHeight(currentPage: PageClass, computedQuestion: Union) {
  let nextQuestion = null;
  if (currentPage.availableHeight >= computedQuestion.requiredHeight) {
    computedQuestion.offsetY = currentPage.contentHeight - currentPage.availableHeight;
    currentPage.availableHeight -= computedQuestion.requiredHeight;
    currentPage.addComponents(computedQuestion);
  } else { // 需要分页处理
    const res = computedQuestion.splitSelf(currentPage)
    currentPage = res.currentPage;
    currentPage.availableHeight = 0;
    nextQuestion = res.nextQuestion;
  }

  return {currentPage, nextQuestion};
}

export default question2page;
