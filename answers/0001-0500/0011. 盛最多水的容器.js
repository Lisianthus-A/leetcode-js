/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = 0;  //最大面积
    for (let width = 1; width < height.length + 1; width++) {  //容器宽度从1开始
        for (let i = 0; i < height.length - width; i++) {  //计算面积
            let high = height[i] > height[i + width] ? height[i + width] : height[i];
            let area = high * width;
            max = max > area ? max : area;
        }
    }
    return max;
};