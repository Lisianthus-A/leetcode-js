/**
 * @param {number[][]} clips
 * @param {number} T
 * @return {number}
 */
var videoStitching = function(clips, T) {
    const dp = new Array(T + 1).fill(Infinity);
    dp[0] = 0;
    for (let i = 1; i < T + 1; i++) {  //计算dp[1] ~ dp[T + 1]
        for (const clip of clips) {
            const [start, end] = clip;
            if (start <= i && end >= i) {  //dp[start]能覆盖[0, start]区间
                dp[i] = Math.min(dp[i], dp[start] + 1);
            }
        }
    }
    const last = dp.pop();
    return last === Infinity ? -1 : last;
};