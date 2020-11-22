/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
    arr.sort((a, b) => {
        const countA = a.toString(2).match(/1/g)?.length || 0;
        const countB = b.toString(2).match(/1/g)?.length || 0;
        if (countA === countB) {
            return a - b;
        }
        return countA - countB;
    });
    return arr;
};