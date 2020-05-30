/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if (numRows === 0) {
        return [];
    }

    let res = [[1]];
    while (res.length < numRows) {
        let arr = [1];
        let prevArr = res.slice(-1).flat();
        while (arr.length < res.length + 1) {
            let num1 = num2 = 0;
            if (prevArr[arr.length - 1]) {
                num1 = prevArr[arr.length - 1];
            }
            if (prevArr[arr.length]) {
                num2 = prevArr[arr.length];
            }
            arr.push(num1 + num2);
        }
        res.push(arr);
    }
    return res;
};