//二分查找
const find = (array: number[], value: number): number => {
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

//插入
const insert = (array: number[], value: number): void => {
    if (value >= array[array.length - 1]) {
        array.push(value);
        return;
    }

    array.splice(find(array, value), 0, value);
}

/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    while (nums1.length !== m) {
        nums1.pop();
    }
    for (const num of nums2) {
        insert(nums1, num);
    }
};