/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let num1 = -Infinity;
    let num2 = -Infinity;
    let num3 = -Infinity;
    for (let i of nums) {
        if (i > num1) {
            num3 = num2;
            num2 = num1;
            num1 = i;
        } else if (i > num2 && i !== num1) {
            num3 = num2;
            num2 = i;
        } else if (i > num3 && i !== num1 && i !== num2) {
            num3 = i;
        }
    }

    return num3 === -Infinity ? num1 : num3;
};