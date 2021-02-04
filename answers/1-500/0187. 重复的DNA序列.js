/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
    const o = {};
    for (let i = 10; i < s.length + 1; i++) {
        const str = s.slice(i - 10, i);
        o[str] = o[str] + 1 || 1;
    }

    const _set = new Set();
    for (const [key, value] of Object.entries(o)) {
        value > 1 && _set.add(key);
    }

    return Array.from(_set);
};