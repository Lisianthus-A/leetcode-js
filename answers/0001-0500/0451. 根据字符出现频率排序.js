/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    const obj = {};
    for (const char of s) {
        obj[char] = obj[char] + 1 || 1;
    }
    
    const array = [];
    for (const arr of Object.entries(obj)) {
        array.push(arr);
    }

    array.sort((a, b) => b[1] - a[1]);
    
    let res = '';
    for (const [key ,value] of array) {
        res += key.repeat(value);
    }
    return res;
};