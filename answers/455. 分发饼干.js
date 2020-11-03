/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);
    let res = 0;
    for (const i of s) {
        i >= g[res] && res++;
    }
    return res;
};