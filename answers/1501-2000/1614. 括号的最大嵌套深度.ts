function maxDepth(s: string): number {
    let cur = 0;
    let max = 0;
    for (let i = 0; i < s.length; ++i) {
        const char = s[i];
        if (char === '(') {
            ++cur;
            max = Math.max(cur, max);
        } else if (char === ')') {
            --cur;
        }
    }

    return max;
};