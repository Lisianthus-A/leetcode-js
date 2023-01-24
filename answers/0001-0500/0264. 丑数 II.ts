function nthUglyNumber(n: number): number {
    const dp = [1];
    let p2 = 0,
        p3 = 0,
        p5 = 0;
    while (dp.length < n) {
        const num = Math.min(dp[p2] * 2, dp[p3] * 3, dp[p5] * 5);
        dp.push(num);
        num === dp[p2] * 2 && ++p2;
        num === dp[p3] * 3 && ++p3;
        num === dp[p5] * 5 && ++p5;
    }
    return dp.pop();
};