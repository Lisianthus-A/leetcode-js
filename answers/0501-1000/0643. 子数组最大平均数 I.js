/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
    const array = nums.slice(0, k).sort((a, b) => a - b);
    let sum = array.reduce((prev, curr) => prev + curr);
    let res = sum / k;

    //插入
    const insert = (val) => {
        if (val >= array[array.length - 1]) {
            array.push(val);
            sum += val;
            return;
        }

        const index = find(val);
        array.splice(index, 0, val);
        sum += val;
    }

    //删除
    const del = (val) => {
        const index = find(val);
        array.splice(index, 1);
        sum -= val;
    }

    //查找
    const find = (val) => {
        let left = 0, right = array.length - 1;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (array[mid] === val) {
                left = mid;
                break;
            }

            if (array[mid] < val) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return left;
    }

    for (let i = k; i < nums.length; i++) {
        del(nums[i - k]);
        insert(nums[i]);
        res = Math.max(res, sum / k);        
    }

    return res;
};