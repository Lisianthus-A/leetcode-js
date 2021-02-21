/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function (nums, limit) {
    let res = 0;
    const array = [];
    const queue = [];  //存储元素排序前的位置
    //数组插入
    const insert = (value) => {
        //插入
        if (value >= array[array.length - 1]) {
            array.push(value);
        } else {
            const index = find(value);
            array.splice(index, 0, value);
        }

        //数组间绝对差是否不大于 limit
        return array[array.length - 1] - array[0] <= limit;
    }

    //数组查找
    const find = (value) => {
        let left = 0, right = array.length - 1;
        while (left <= right) {
            const mid = left + right >> 1;
            if (array[mid] === value) {
                return mid;
            }

            if (array[mid] > value) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        return left;
    }

    //数组删除
    const del = (value) => {
        const index = find(value);
        array.splice(index, 1);

        if (array.length === 0) {
            return true;
        }

        //数组间绝对差是否不大于 limit
        return array[array.length - 1] - array[0] <= limit;
    }

    for (const num of nums) {
        queue.push(num);
        let isValid = insert(num);
        if (isValid) {
            res = Math.max(res, array.length);
        } else {
            while (!isValid && queue.length) {
                const theNumToDel = queue.shift();
                isValid = del(theNumToDel);
            }
        }
    }

    return res;
};