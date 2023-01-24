/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function (board) {
    let res = 0;
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === 'X') {
                //通过左边和上边的值判断是否船头
                if (board[i][j - 1] === 'X' || board[i - 1] && board[i - 1][j] === 'X') {
                    continue;
                }
                res++;
            }
        }
    }
    return res;
};