function rob(nums: number[]): number {
  if (nums.length <= 2) {
      return Math.max(nums[0], nums[1] || 0);
  }

  nums[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; ++i) {
      const num = nums[i];
      nums[i] = Math.max(nums[i - 2] + num, nums[i - 1]);
  }

  return Math.max(...nums.slice(-2));
};