/**
 * @param {string} s
 * @return {string}
 */
var originalDigits = function (s) {
    const obj = {};
    for (let char of s) {  //统计各字符出现次数
        obj[char] = obj[char] + 1 || 1;
    }
    const arr = [];
    arr[0] = obj['z'] || 0;
    arr[2] = obj['w'] || 0;
    arr[4] = obj['u'] || 0;
    arr[3] = obj['r'] - arr[0] - arr[4] || 0;
    arr[1] = obj['o'] - arr[0] - arr[2] - arr[4] || 0;
    arr[5] = obj['f'] - arr[4] || 0;
    arr[6] = obj['x'] || 0;
    arr[7] = obj['v'] - arr[5] || 0;
    arr[8] = obj['g'] || 0;
    arr[9] = obj['i'] - arr[5] - arr[6] - arr[8] || 0;

    return arr.map((value, idx) => idx.toString().repeat(value)).join('');
};