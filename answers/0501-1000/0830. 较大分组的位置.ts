function largeGroupPositions(s: string): number[][] {
    const res = [];

    for (let i = 0; i < s.length; i++) {
        const preChar = s[i], start = i;
        let count = 1;
        while (s[i + 1] === preChar) {
            count++;
            i++;
        }
        if (count >= 3) {
            res.push([start, i]);
        }
    }

    return res;
};