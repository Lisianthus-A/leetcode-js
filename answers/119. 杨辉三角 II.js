/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
    let res = [1];

    //当前行小于目标行
    for (let currentRow = 0; currentRow < rowIndex; currentRow++) {
        let next = [];  //下一行
        while (next.length < res.length + 1) {
            let num1 = res[next.length - 1] ? res[next.length - 1] : 0;  //左上的数
            let num2 = res[next.length] ? res[next.length] : 0;  //右上的数
            next.push(num1 + num2);
        }
        res = next;
    }

    return res;
};