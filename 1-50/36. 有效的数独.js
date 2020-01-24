/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    for (let i of board) {  //判断每一行
        let arr = [];
        for (let j of i) {  
            if (j === '.') {  //跳过空白格
                continue;
            }
            if (arr.indexOf(j) === -1) {
                arr.push(j);
            } else {
                return false;
            }
        }
    }
    for (let i = 0; i < 9; i++) {  //判断每一列
        let arr = [];
        for (let j of board) {
            if (j[i] === '.') {  //跳过空白格
                continue;
            }
            if (arr.indexOf(j[i]) === -1) {
                arr.push(j[i]);
            } else {
                return false;
            }
        }
    }
    for (let i = 0; i < 3; i++) {  //判断每个九宫格
        let num = 0;
        let arr = [];
        for (let j of board) {
            //从上到下，从左到右，依次判断九宫格
            for (let k = i * 3; k < i * 3 + 3; k++) {
                if (j[k] === '.') {  //跳过空白格
                    continue;
                }
                if (arr.indexOf(j[k]) === -1) {
                    arr.push(j[k]);
                } else {
                    return false;
                }
            }
            num++;
            if (num === 3) {  //判断完一个九宫格，清空数组
                num = 0;
                arr = [];
            }
        }
    }
    return true;
};