/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {

    //构造每行每列只有一个皇后的组合
    const helper = (combine, useIndexs) => {  //当前组合， 使用过的index
        if (combine.length === n) {
            isResolve(combine) && res.push(combine);
            return;
        }
        
        const arr = new Array(n).fill('.');
        for (let i = 0; i < n; i++) {
            if (useIndexs.includes(i)) {  //已使用过的index，跳过
                continue;
            }
            arr2 = arr.slice();
            arr2[i] = 'Q';
            helper([...combine, arr2.join('')], [...useIndexs, i]);
        }
    }

    //判断是否n皇后的解决方案
    //helper里面已确保每行每列只有一个皇后，只需判断斜线
    const isResolve = (array) => {
        for (let i = 0; i < n; i++) {
            const queenIndex = array[i].indexOf('Q');
            let j = i, k = queenIndex;
            while (j > 0 && k > 0) {
                j--;
                k--;
            }
            // console.log("左上角", [j, k]);
            for (; j < n && k < n; j++ , k++) {
                // console.log("从左上到右下", [j, k]);
                if (j === i && k === queenIndex) {
                    continue;
                }
                if (array[j][k] === 'Q') {
                    return false;
                }
            }
            j = i, k = queenIndex;
            while (j > 0 && k < n - 1) {
                j--
                k++;
            }
            // console.log("右上角", [j, k]);
            for (; j < n && k > 0; j++ , k--) {
                // console.log("从右上到左下", [j, k]);
                if (j === i && k === queenIndex) {
                    continue;
                }
                if (array[j][k] === 'Q') {
                    return false;
                }
            }
        }
        return true;
    }

    const res = [];
    helper([], []);
    return res;
};