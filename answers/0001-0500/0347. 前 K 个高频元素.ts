function topKFrequent(nums: number[], k: number): number[] {
  // 记录 num 出现的次数 { num: count }
  const countObj: Record<string, number> = {};
  for (let i = 0; i < nums.length; ++i) {
      const num = nums[i];
      countObj[num] = countObj[num] + 1 || 1;
  }

  const array: Array<undefined | number[]> = [];
  for (const num in countObj) {
      const count = countObj[num];
      if (array[count]) {
          array[count].push(Number(num));
      } else {
          array[count] = [Number(num)];
      }
  }

  let result: number[] = [];
  for (let i = array.length - 1; i >= 0; --i) {
      const nums2 = array[i];
      if (nums2 !== undefined) {
          result = result.concat(nums2);
          if (result.length === k) {
              return result;
          }
      }
  }
};