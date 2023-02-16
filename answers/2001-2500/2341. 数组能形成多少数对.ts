function numberOfPairs(nums: number[]): number[] {
    const m = new Map<number, number>();
    nums.forEach((num) => {
        if (m.has(num)) {
            m.set(num, m.get(num) + 1);
        } else {
            m.set(num, 1);
        }
    });

    const res = [0, 0];
    for (const v of m.values()) {
        res[0] += v / 2 >> 0;
        res[1] += v % 2;
    }

    return res;
};