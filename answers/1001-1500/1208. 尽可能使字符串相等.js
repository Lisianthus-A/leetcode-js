/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function (s, t, maxCost) {
    const costs = [];
    for (let i = 0; i < s.length; i++) {
        const cost = Math.abs(s[i].charCodeAt() - t[i].charCodeAt());
        costs.push(cost);
    }

    let res = 0;
    for (let i = 0; i < costs.length; i++) {
        let sum = 0, count = 0;
        for (let j = i; j < costs.length; j++) {
            if (sum + costs[j] <= maxCost) {
                sum += costs[j];
                count++;
            } else {
                break;
            }
        }
        res = Math.max(res, count);
    }

    return res;
};