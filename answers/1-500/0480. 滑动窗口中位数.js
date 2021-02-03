/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var medianSlidingWindow = function (nums, k) {
    const array = nums.slice(0, k).sort((a, b) => a - b);
    //插入元素
    const insert = (val) => {
        const index = find(val);
        index === k - 1 ? array.push(val) : array.splice(index, 0, val);
    }
    //删除元素
    const del = (val) => {
        const index = find(val);
        array.splice(index, 1);
    }
    //查找元素
    const find = (val) => {
        let left = 0, right = k - 1;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (array[mid] === val) {
                left = mid;
                break;
            }

            if (array[mid] > val) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        return left;
    }

    //获取数组当前的中位数
    const getMedian = () => {
        const mid = Math.floor(k / 2);
        return k % 2 === 0 ? (array[mid] + array[mid - 1]) / 2 : array[mid];
    }

    const res = [getMedian()];
    for (let i = k; i < nums.length; i++) {
        del(nums[i - k]);
        insert(nums[i]);
        res.push(getMedian());
    }

    return res;
};