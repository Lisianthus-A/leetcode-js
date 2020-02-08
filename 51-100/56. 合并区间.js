/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);  //按区间第一个数字大小排序
    for (let i = 0; i < intervals.length - 1; i++) {
        //左区间部分覆盖右区间
        let flag0 = intervals[i + 1] !== undefined
        && intervals[i][1] >= intervals[i + 1][0] 
        && intervals[i][1] <= intervals[i + 1][1];
        //左区间完全覆盖右区间
        let flag1 = intervals[i + 1] !== undefined
        && intervals[i][0] <= intervals[i + 1][0]
        && intervals[i][1] >= intervals[i + 1][1];
        if (flag1) {
            intervals.splice(i + 1, 1);
            i--;
            continue;
        }
        if (flag0) {
            intervals[i][1] = intervals[i + 1][1];
            intervals.splice(i + 1, 1);
            i--;
        }
    }
    return intervals;
};