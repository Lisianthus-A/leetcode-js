/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
    const isEqualObj = (obj, idx) => {
        if (Object.values(obj).join('') === targetString) {
            res.push(idx);
        }
    }

    const res = [];
    const targetObj = {};

    for (const char of p) {
        targetObj[char] = targetObj[char] + 1 || 1;
    }

    const targetString = Object.values(targetObj).join('');

    let currentObj = {};
    for (const key of Object.keys(targetObj)) {
        currentObj[key] = 0;
    }

    for (let left = 0, right = p.length; right <= s.length; left++ , right++) {
        for (const char of s.slice(left, right)) {
            if (currentObj[char] !== undefined) {
                currentObj[char]++;
            }
        }
        isEqualObj(currentObj, left);
        for (const key of Object.keys(targetObj)) {
            currentObj[key] = 0;
        }
    }
    
    return res;
};