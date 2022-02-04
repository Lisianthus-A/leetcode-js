function countGoodRectangles(rectangles: number[][]): number {
    let maxLen = -Infinity;
    const counts: Record<string, number> = {};
    for (let i = 0; i < rectangles.length; ++i) {
        const len = Math.min(...rectangles[i]);
        counts[len] = counts[len] + 1 || 1;
        if (len > maxLen) {
            maxLen = len;
        }
    }

    return counts[maxLen];
};