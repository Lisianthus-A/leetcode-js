/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if (num1 === '0' || num2 === '0') {
        return '0';
    }
    let arr = [];  //存放各位的数字
    let curIndex = 0;  //当前位
    for (let i of num2) {
        let idx = curIndex;
        for (let j of num1) {
            if (arr[idx]) {  //当前计算位存在数字
                arr[idx] += i * j;
            } else {  //当前计算位不存在数字
                arr[idx] = i * j;
            }
            idx++;
        }
        curIndex++;
    }
    //处理arr除第一位外各位大于等于10的数
    for (let i = arr.length - 1; i > 0; i--) {
        if (arr[i] >= 10) {
            arr[i - 1] += parseInt(arr[i] / 10);
            arr[i] %= 10;
        }
    }
    return arr.join('');
};