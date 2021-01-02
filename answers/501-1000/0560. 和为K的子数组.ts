function subarraySum(nums: number[], k: number): number {
    let res = 0, sum;

    for (let start = 0; start < nums.length; start++) {
        sum = 0;
        for (let end = start; end < nums.length; end++) {
            sum += nums[end];
            sum === k && res++;
        }
    }

    return res;
};