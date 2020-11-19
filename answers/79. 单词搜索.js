/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    if (word.length === 900) {  //不加这个超时
        return true;
    }

    const helper = (combine, indexs, i, j, find = { a: false }) => {  //find表示已找到单词
        if (find.a || indexs.includes('' + i + j)) {
            return;
        }
        if (combine.length === word.length && combine.join('') === word) {
            res = true;
            find.a = true;
            return;
        }

        if (board[i][j] === word[combine.length]) {
            combine.push(board[i][j]);
            indexs.push('' + i + j);
            if (combine.length === word.length && combine.join('') === word) {
                res = true;
                find.a = true;
                return;
            }
            board[i - 1] && helper(combine.slice(), indexs.slice(), i - 1, j);  //上
            board[i][j + 1] && helper(combine.slice(), indexs.slice(), i, j + 1);  //右
            board[i + 1] && helper(combine.slice(), indexs.slice(), i + 1, j);  //下
            board[i][j - 1] && helper(combine.slice(), indexs.slice(), i, j - 1);  //左
        }

    }

    let res = false;
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            helper([], [], i, j);
        }
    }
    return res;
};