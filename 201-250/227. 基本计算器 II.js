/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
    const calc = (n) => {
        switch (sign) {
            case "+":
                nums.push(+n);
                break;
            case "-":
                nums.push(-n);
                break;
            case "*":
                nums.push(nums.pop() * n);
                break;
            case "/":
                nums.push(parseInt(nums.pop() / n));
        }
    }
    let arr = s.match(/\d+|[\+\-\*\/]/g);
    let sign = "+";
    let nums = [];
    for (let i of arr) {
        if (/\d+/.test(i)) {
            calc(i);
        } else {
            sign = i;
        }
    }
    return nums.reduce((a, b) => a + b);
};