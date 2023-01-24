function largestRectangleArea(heights: number[]): number {
    let max = 0;
    const stack: Array<Array<number>> = [];  //[ height, index ]

    //获取对于height[index]出栈后计算宽度采用的下标
    const findIndex = (index): number => {
        let i = index - 1;
        while (heights[i] > heights[index]) {
            i--;
        }

        return i + 1;
    }

    for (let i = 0; i < heights.length; i++) {

        //当前柱子比栈顶柱子短，栈顶出栈，计算面积
        while (stack[stack.length - 1] && heights[i] < stack[stack.length - 1][0]) {
            const [height, idx] = stack.pop();
            max = Math.max(max, height * (i - idx));
        }

        //当前柱子入栈
        const pair = [heights[i], findIndex(i)];
        stack.push(pair);
    }

    //计算栈中剩余柱子的面积
    while (stack.length) {
        const [height, idx] = stack.pop();
        max = Math.max(max, height * (heights.length - idx));
    }

    return max;
};