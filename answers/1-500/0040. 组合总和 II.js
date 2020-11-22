/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    candidates.sort((a, b) => a - b);  //排序
    const helper = (target, combine, idx) => {  //目标  当前组合  下标
        const str = combine.join('');
        if (target === 0 && !s.has(str)) {  //数字和为target并且未重复
            res.push(combine);
            s.add(str);
            return;
        }
        if (idx > candidates.length || target < 0) {
            return;
        }

        helper(target, combine, idx + 1);  //选择当前数
        helper(target - candidates[idx], [...combine, candidates[idx]], idx + 1);  //忽略当前数
    }
    const s = new Set();  //使用Set记录已使用的组合
    const res = [];
    helper(target, [], 0);
    return res;
};