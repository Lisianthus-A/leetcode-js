/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
    const m = new Map();
    for (const num of arr) {
        m.set(num, m.has(num) ? m.get(num) + 1 : 1);
    }
    const s = new Set(m.values());
    return s.size === m.size;
};