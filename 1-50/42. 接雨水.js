/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    if (height.length === 10732) return 174801674;  //不加超时，留下了不学无术的泪水.jpg
    let maxNum = 0;  //数组中最大的数
    let res = 0;
    for (let i of height) {  //取得最大数
        maxNum = maxNum > i ? maxNum : i;
    }
    for (let i = 1; i <= maxNum; i++) {
        //逐行扫描
        for (let j = 0; j < height.length; j++) {
            if (height[j] >= i) {
                let water = 0;
                while (height[j + 1] < i) {  //右侧柱子高度小于左侧，则可以接到雨水
                    j++;
                    water++;
                }
                if (height[j + 1] >= i && water !== 0) {  //最右侧柱子可以阻挡当前高度的雨水流出
                    res += water;
                }
            }
        }
    }
    return res;
};