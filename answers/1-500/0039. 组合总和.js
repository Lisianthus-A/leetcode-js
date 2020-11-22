/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const dfs = (target, combine, idx) => {
        if (target === 0) {
            res.push(combine);
            return;
        } else if (target < 0 || idx === candidates.length) {
            return;
        }
        dfs(target, combine, idx + 1);
        dfs(target - candidates[idx], [...combine, candidates[idx]], idx);
    }
    let res = [];
    dfs(target, [], 0);
    return res;
};