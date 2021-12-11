function tribonacci(n: number): number {
    if (n <= 2) {
        return [0, 1, 1][n];
    }

    let t = 0,
        t1 = 1,
        t2 = 1;

    n -= 2;
    for (let i = 0; i < n; ++i) {
        const temp = t + t1 + t2;
        t = t1;
        t1 = t2;
        t2 = temp;
    }

    return t2;
};