/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    const res = [0];
    for (let i = 1; i <= num; i++) {
        res.push(i.toString(2).match(/1/g).length);
    }
    return res;
};