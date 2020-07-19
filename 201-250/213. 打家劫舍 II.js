/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    if (nums.length <= 2) {
        return Math.max(...nums) | 0;
    }

    const foo = (arr) => {
        let len = arr.length;
        
        for (let i = 2; i < len; i++) {
            arr[i] += Math.max(...arr.slice(0, i - 1));
        }

        return Math.max(arr[len - 1], arr[len - 2]);
    }

    return Math.max(foo(nums.slice(0, -1)), foo(nums.slice(1)));
};