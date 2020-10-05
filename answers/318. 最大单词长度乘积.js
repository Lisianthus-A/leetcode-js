/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
    const hasCommonLetter = (str1, str2) => {  //是否含有公共字母
        const s = new Set(str1);
        for (let char of s) {
            if (str2.includes(char)) {
                return true;
            }
        }
        return false;
    }

    let res = 0;
    for (let i = 0; i < words.length; i++) {
        for (let j = i + 1; j < words.length; j++) {
            if (!hasCommonLetter(words[i], words[j])) {  //没有公共字母
                res = Math.max(res, words[i].length * words[j].length);
            }
        }
    }
    return res;
};