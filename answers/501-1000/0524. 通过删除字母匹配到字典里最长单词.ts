function findLongestWord(s: string, dictionary: string[]): string {
  let longestString = '';
  for (let i = 0; i < dictionary.length; ++i) {
      const subStr = dictionary[i];
      // 当前最长字符串比要判断的字符串更长，跳过
      if (longestString.length > subStr.length) {
          continue;
      }

      // subStr 为 s 的子序列
      if (isSubString(s, subStr)) {
          // subStr 比 longestString 长度更长
          // 或者长度相同，字母序更小
          if ((longestString.length < subStr.length)
              || (longestString.length === subStr.length && longestString > subStr)) {
              longestString = subStr;
          }
      }
  }

  return longestString;
};

// 判断 subStr 是否为 str 的子序列
function isSubString(str: string, subStr: string): boolean {
  for (let i = 0, j = 0; i < str.length; ++i) {
      if (str[i] === subStr[j]) {
          ++j;
          if (j === subStr.length) {
              return true;
          }
      }
  }

  return false;
}