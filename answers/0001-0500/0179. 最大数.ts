function largestNumber(nums: number[] | string[]): string {
    // 比较两数拼接后的大小 排序
    nums.sort((a, b) => {
        const ab = '' + a + b;
        const ba = '' + b + a;
        if (ab > ba) {
            return -1;
        } else if (ba > ab) {
            return 1;
        } else {
            return 0;
        }
    });
    // 去除数组前多余的 0
    for (let i = 1; i < nums.length; ++i) {
        if (nums[i - 1] !== 0) {
            break;
        }

        if (nums[i - 1] === 0 && nums[i] === 0) {
            nums[i - 1] = '';
        }
    }
    return nums.join('');
};