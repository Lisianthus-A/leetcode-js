/**
 * @param {number[]} arr
 * @return {number}
 */
var maxTurbulenceSize = function (arr) {
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        //计算两种情况下的翻转对长度
        let count1 = 1, count2 = 1, flag = true;
        for (let j = i + 1; j < arr.length; j++) {
            if (flag && arr[j - 1] > arr[j]) {
                count1++;
            } else if (!flag && arr[j - 1] < arr[j]) {
                count1++;
            } else {
                break;
            }
            flag = !flag;
        }

        flag = true;
        for (let j = i + 1; j < arr.length; j++) {
            if (flag && arr[j - 1] < arr[j]) {
                count2++;
            } else if (!flag && arr[j - 1] > arr[j]) {
                count2++;
            } else {
                break;
            }
            flag = !flag;
        }

        res = Math.max(res, count1, count2);
    }

    return res;
};