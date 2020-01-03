/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let max = 0;
    let arr = [];  //保存当前不重复子串的所有字符
    for (let i in s) {  //遍历s
        if (arr.indexOf(s[i]) === -1) {  //遍历到的字符不在arr里
            arr.push(s[i]);
        }
        else {  //遍历到的字符在arr里
            arr = arr.slice(arr.indexOf(s[i]) + 1);  //取arr里s[i]字符后的所有元素
            arr.push(s[i]);
        }
        max = max > arr.length ? max : arr.length;
    }
    return max;
};