/**
 Do not return anything, modify nums1 in-place instead.
 */
 function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    // 指向 nums1 和 nums2 中当前最大元素的下标
    let p1 = m - 1, p2 = n - 1;
    // 指向 nums1 当前中需填充的下标
    let tail = nums1.length - 1;

    // 从 nums1 和 nums2 尾部开始遍历
    // 每次循环取 nums1[p1] 和 nums2[p2] 中较大者放入 nums[tail]
    while (tail !== -1) {
        const num1 = nums1[p1];
        const num2 = nums2[p2];
        if (num1 !== undefined && num2 !== undefined) {
            if (num1 >= num2) {
                nums1[tail] = num1;
                --p1;
            } else {
                nums1[tail] = num2;
                --p2;
            }
        } else if (num1 !== undefined) {
            nums1[tail] = num1;
            --p1;
        } else {
            nums1[tail] = num2;
            --p2;
        }

        --tail;
    }
};