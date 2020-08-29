export default class Utils {
  static addUnit(num: number) {
    return `${num}mm`;
  }

  static reorderNo(bigQuestions: GlobalValue.IGeneralBigQuestionType[]) {
    let questionNo = 1;
    return bigQuestions.map((bigQuestion, bIdx) => {
      bigQuestion.questionNo = bIdx + 1;
      // @ts-ignore FIXME: 类型
      bigQuestion.questions = bigQuestion.questions.map(subQuestion => {
        subQuestion.questionNo = questionNo++;
        return subQuestion;
      });
      return bigQuestion;
    });
  }

  static arabia2simplifiedChinese(num: string) {
    let i;
    for (i = num.length - 1; i >= 0; i--) {
      num = num.replace(",", "") //替换num中的“,”
      num = num.replace(" ", "") //替换num中的空格
    }

    //字符处理完毕后开始转换，采用前后两部分分别转换
    let part = String(num).split(".");
    let newchar = "";
    //小数点前进行转化
    for (i = part[0].length - 1; i >= 0; i--) {
      if (part[0].length > 10) {
        //alert("位数过大，无法计算");
        return "";
      } //若数量超过拾亿单位，提示
      let tmpnewchar = ""
      let perchar = part[0].charAt(i);
      switch (perchar) {
        case "0":
          tmpnewchar = "零" + tmpnewchar;
          break;
        case "1":
          tmpnewchar = "一" + tmpnewchar;
          break;
        case "2":
          tmpnewchar = "二" + tmpnewchar;
          break;
        case "3":
          tmpnewchar = "三" + tmpnewchar;
          break;
        case "4":
          tmpnewchar = "四" + tmpnewchar;
          break;
        case "5":
          tmpnewchar = "五" + tmpnewchar;
          break;
        case "6":
          tmpnewchar = "六" + tmpnewchar;
          break;
        case "7":
          tmpnewchar = "七" + tmpnewchar;
          break;
        case "8":
          tmpnewchar = "八" + tmpnewchar;
          break;
        case "9":
          tmpnewchar = "九" + tmpnewchar;
          break;
      }
      switch (part[0].length - i - 1) {
        case 0:
          tmpnewchar = tmpnewchar;
          break;
        case 1:
          if (perchar != '0') tmpnewchar = tmpnewchar + "十";
          break;
        case 2:
          if (perchar != '0') tmpnewchar = tmpnewchar + "百";
          break;
        case 3:
          if (perchar != '0') tmpnewchar = tmpnewchar + "千";
          break;
        case 4:
          tmpnewchar = tmpnewchar + "万";
          break;
        case 5:
          if (perchar != '0') tmpnewchar = tmpnewchar + "十";
          break;
        case 6:
          if (perchar != '0') tmpnewchar = tmpnewchar + "百";
          break;
        case 7:
          if (perchar != '0') tmpnewchar = tmpnewchar + "千";
          break;
        case 8:
          tmpnewchar = tmpnewchar + "亿";
          break;
        case 9:
          tmpnewchar = tmpnewchar + "十";
          break;
      }
      newchar = tmpnewchar + newchar;
    }
    //替换所有无用汉字，直到没有此类无用的数字为止
    while (newchar.search("零零") != -1 || newchar.search("零亿") != -1 || newchar.search("亿万") != -1 || newchar.search("零万") != -1) {
      newchar = newchar.replace("零亿", "亿");
      newchar = newchar.replace("亿万", "亿");
      newchar = newchar.replace("零万", "万");
      newchar = newchar.replace("零零", "零");
    }
    //替换以“一十”开头的，为“十”
    if (newchar.indexOf("一十") == 0) {
      newchar = newchar.substr(1);
    }
    //替换以“零”结尾的，为“”
    if (newchar.lastIndexOf("零") == newchar.length - 1) {
      newchar = newchar.substr(0, newchar.length - 1);
    }
    return newchar;
  }

  static mm2px(num: number) {
    return num * 10 / 2.54;
  }

  static px2mm(num: number) {
    return num * 2.54 / 10;
  }
}
