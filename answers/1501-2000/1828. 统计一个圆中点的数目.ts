function countPoints(points: number[][], queries: number[][]): number[] {
    const res = [];
    for (let i = 0; i < queries.length; ++i) {
        const [x, y, r] = queries[i];
        let count = 0;
        for (let j = 0; j < points.length; ++j) {
            const [px, py] = points[j];
            const distance = Math.sqrt((px - x) ** 2 + (py - y) ** 2);
            if (distance <= r) {
                ++count;
            }
        }
        res.push(count);
    }


    return res;
};