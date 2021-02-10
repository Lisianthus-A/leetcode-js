/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    const initObj = {};
    const diff = s2.length - s1.length;
    for (const char of s1) {
        initObj[char] = initObj[char] + 1 || 1;
    }

    for (let i = 0; i < s2.length; i++) {
        const obj = { ...initObj };
        let sum = 0;
        for (let j = i; j < s2.length; j++) {
            const char = s2[j];
            if (obj[char]) {
                obj[char]--;
                sum++;
                if (sum === s1.length) {
                    return true;
                }
            } else {
                break;
            }
        }
    }

    return false;
};