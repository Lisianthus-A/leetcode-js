/**
 * @param {string} s
 * @return {string}
 */
var sortString = function(s) {
    const obj = {};
    const res = [];
    for (const char of s) {
        obj[char] = obj[char] ? obj[char] + 1 : 1;
    }
    while (Object.keys(obj).length > 0) {
        for (const key of Object.keys(obj).sort()) {
            res.push(key);
            obj[key]--;
            obj[key] === 0 && delete obj[key];
        }
        for (const key of Object.keys(obj).sort().reverse()) {
            res.push(key);
            obj[key]--;
            obj[key] === 0 && delete obj[key];
        }
    }
    return res.join('');
};