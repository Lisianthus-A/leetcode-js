function maximalRectangle(matrix: string[][]): number {
    if (matrix.length === 0) {
        return 0;
    }

    //获取每层的柱状图
    const bar: Array<Array<number>> = matrix.map(() => []);
    bar[0] = matrix[0].map(v => +v);
    for (let i = 1; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            bar[i][j] = +matrix[i][j] ? 1 + bar[i - 1][j] : 0;
        }
    }

    //84. 柱状图中最大的矩形
    const largestRectangleArea = (heights: number[]): number => {
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

    return Math.max(...bar.map(largestRectangleArea));
};

