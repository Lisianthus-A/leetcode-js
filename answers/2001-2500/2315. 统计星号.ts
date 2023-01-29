function countAsterisks(s: string): number {
    let flag = 0;
    let res = 0;

    for (let i = 0; i < s.length; ++i) {
        if (s[i] === "|") {
            flag ^= 1;
        } else if (s[i] === "*" && flag === 0) {
            ++res;
        }
    }

    return res;
};