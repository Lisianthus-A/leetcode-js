function getMaximumGenerated(n: number): number {
    if (n <= 2) {
        return [0, 1, 1][n];
    }

    let max = 0;
    const array = [];
    array.push(0, 1);
    for (let i = 0; i < n - 1; ++i) {
        const idx = array.length;
        const half = idx * 0.5 >> 0;
        if (idx % 2) {
            const temp = array[half] + array[half + 1];
            max = Math.max(temp, max);
            array.push(temp);
        } else {
            array.push(array[half]);
        }
    }

    return max;
};