/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (!strs.length) {  //长度为0
        return "";
    }
    let commonStr = '';
    let idx = 0;  //strs[0]字符串的当前索引
    while (1) {
        if (strs[0][idx] === undefined) {  //索引超出范围
            break;
        }
        commonStr += strs[0][idx++];  //公共字符串加一个字符
        for (let i in strs) {  //检测字符串是否全部以commonStr开头
            if (!RegExp("^" + commonStr).test(strs[i])) {
                commonStr = commonStr.slice(0, -1);  //不以commonStr开头，回退
                break;
            }
        }
    }
    return commonStr;
};