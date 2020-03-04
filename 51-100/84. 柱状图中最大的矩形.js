/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let max = 0;
    let len = heights.length;
    for (let wid = 1; wid <= len; wid++) {
        let maxHeight = 0;
        for (let i = 0; i < len - wid + 1; i++) {
            maxHeight = Math.max(maxHeight, Math.min(...heights.slice(i, i + wid)));
        }
        max = Math.max(max, wid * maxHeight);
    } 
    return max;
};