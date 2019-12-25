/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let ret = new Array();
    for(i = 0; i < nums.length; i++)
    {
        for(j = i + 1; j < nums.length; j++)
        {
            if(nums[i] + nums[j] == target)
            {
                ret[0] = i;
                ret[1] = j;
                return ret;
            }
        }
    }
};