/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    //将a和b以数组形式存储
    let arr1 = a.split('').map(e => parseInt(e));
    let arr2 = b.split('').map(e => parseInt(e));
    //补0
    if (a.length > b.length) {
        for (let i = 0; i < a.length - b.length; i++) {
            arr2.unshift(0);
        }
    } else {
        for (let i = 0; i < b.length - a.length; i++) {
            arr1.unshift(0);
        }
    }
    //相加
    for (let i = 0; i < arr1.length; i++) {
        arr1[i] = arr1[i] + arr2[i];
    }
    //处理arr1，逢2进1
    for (let i = arr1.length - 1; i > 0; i--) {
        if (arr1[i] >= 2) {
            arr1[i] -= 2;
            arr1[i - 1]++;
        }
    }
    if (arr1[0] >= 2) {
        arr1[0] -= 2;
        arr1.unshift(1);
    }
    return arr1.join('');
};