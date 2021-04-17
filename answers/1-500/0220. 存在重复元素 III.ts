let array: Array<number>;
let flag: boolean;

// 初始化
const init = (): void => {
    array = [];
    flag = false;
}

// 查找
const find = (num: number): number => {
    let left = 0, right = array.length - 1;
    while (left <= right) {
        const mid = left + right >> 1;
        if (array[mid] === num) {
            return mid;
        }

        if (array[mid] > num) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return left;
}

// 插入 num
const insert = (num: number, t: number): void => {
    const lastNum = array.slice(-1)[0];
    if (num >= lastNum) {
        array.push(num);
        flag = Math.abs(num - lastNum) <= t;
        return;
    }

    const index = find(num);
    array.splice(index, 0, num);
    flag = Math.abs(num - array[index - 1]) <= t || Math.abs(num - array[index + 1]) <= t;
}

// 删除 num
const remove = (num: number): void => {
    const index = find(num);
    array.splice(index, 1);
}

function containsNearbyAlmostDuplicate(nums: number[], k: number, t: number): boolean {
    init();


    for (let i = 0, len = nums.length; i < len; ++i) {
        if (i >= k + 1) {
            remove(nums[i - k - 1]);
        }
        insert(nums[i], t);

        if (flag) {
            return true;
        }
    }

    return false;
};