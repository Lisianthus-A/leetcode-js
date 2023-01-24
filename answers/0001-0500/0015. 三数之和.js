/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let arr = nums.sort((a, b) => a - b);  //将nums按升序排序，存入arr
    let ret = [];
    for (let i = 0; i < arr.length - 2; i++) {
        if (arr[i] > 0) {  //arr[i]大于0，则不会出现等于0的sum
            break;
        }
        if (arr[i] === arr[i - 1]) {  //去重
            continue;
        }
        let left = i + 1;  //左索引值
        let right = arr.length - 1;  //右索引值
        while (left < right) {
            let sum = arr[i] + arr[left] + arr[right];
            if (sum > 0) {  //sum过大，右索引左移一位
                right--;
            } else if (sum < 0) {  //sum过小，左索引右移一位
                left++;
            } else {  //sum为0
                while (left < right && arr[left] === arr[left + 1]) left++; // 去重
                while (left < right && arr[right] == arr[right - 1]) right--; // 去重
                ret.push([arr[i], arr[left], arr[right]]);
                left++;
                right--;
            }
        }
    }
    return ret;
};