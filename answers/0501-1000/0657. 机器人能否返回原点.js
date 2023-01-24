/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
    let arr = [0, 0];  //x y
    for (let i of moves) {
        switch (i) {
            case 'U':
                arr[1]++;
                break;
            case 'L':
                arr[0]--;
                break;
            case 'D':
                arr[1]--;
                break;
            case 'R':
                arr[0]++;
        }
    }
    if (arr.every(e => e === 0)) {
        return true;
    }
    return false;
};