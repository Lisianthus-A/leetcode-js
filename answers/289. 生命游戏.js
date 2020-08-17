/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    //获取指定位置的活细胞数量
    const getLiveNumber = (i, j) => {
        let num = 0;
        num += board[i - 1] && board[i - 1][j - 1] ? 1 : 0;
        num += board[i - 1] && board[i - 1][j] ? 1 : 0;
        num += board[i - 1] && board[i - 1][j + 1] ? 1 : 0;

        num += board[i] && board[i][j - 1] ? 1 : 0;
        num += board[i] && board[i][j + 1] ? 1 : 0;
        
        num += board[i + 1] && board[i + 1][j - 1] ? 1 : 0;
        num += board[i + 1] && board[i + 1][j] ? 1 : 0;
        num += board[i + 1] && board[i + 1][j + 1] ? 1 : 0;

        return num;
    }

    let next = [];
    for (let i of board) {
        next.push([]);
    }
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            let num = getLiveNumber(i, j);
            if (board[i][j]) {
                if (num < 2 || num > 3) {
                    next[i][j] = 0; 
                } else {
                    next[i][j] = 1;
                }
            } else {
                next[i][j] = 0;
                if (num === 3) {
                    next[i][j] = 1;
                }
            }
        }
    }
    for (let i = 0; i < board.length; i++) {
        board[i] = next[i];
    }
};