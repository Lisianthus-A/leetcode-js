/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    let res = 0;
    let hash = new Set();
    for (let char of S) {
        if (hash.has(char)) {
            res++;
            continue;
        }
        if (J.includes(char)) {
            res++;
            hash.add(char);
        }
    }
    return res;
};