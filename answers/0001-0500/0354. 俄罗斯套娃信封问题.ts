function maxEnvelopes(envelopes: number[][]): number {
    envelopes.sort((a, b) => a[0] * 1000 - a[1] - b[0] * 1000 + b[1]);

    const dp = new Array(envelopes.length).fill(1);
    let res = 1;
    for (let i = 1; i < envelopes.length;i++) {
        for (let j = 0; j < i; j++) {
            if (envelopes[i][1] > envelopes[j][1]) {
                dp[i] = Math.max(dp[j] + 1, dp[i]);
                res = Math.max(dp[i], res);
            }
        }
    }

    return res;
};