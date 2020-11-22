/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let res = [];
    let arr = matrix.slice();
    while(arr.length) {
        //添加第一行
        res.push(...arr.shift());
        //添加末尾元素
        for (let i of arr) {
            res.push(i.pop());
        }
        //添加反转后的末尾行
        let e = arr.pop();
        if (e) {
            res.push(...e.reverse());
        }
        arr = arr.filter(elem => elem.length > 0);  //过滤arr中长度为0的元素
        //添加首元素
        for (let i = arr.length - 1; i >= 0; i--) {
            res.push(arr[i].shift());
        }
        arr = arr.filter(elem => elem.length > 0);  //过滤arr中长度为0的元素
    }
    return res;
};