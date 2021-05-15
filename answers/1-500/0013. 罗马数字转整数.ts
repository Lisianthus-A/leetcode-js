const map = {
    'M': 1000,
    'CM': 900,
    'D': 500,
    'CD': 400,
    'C': 100,
    'XC': 90,
    'L': 50,
    'XL': 40,
    'X': 10,
    'IX': 9,
    'V': 5,
    'IV': 4,
    'I': 1
};

function romanToInt(s: string): number {
    let res = 0;
    for (let i = 0; i < s.length; ) {
        const char = s[i];
        const char2 = s[i + 1] ? s[i] + s[i + 1] : undefined;
        if (map[char2]) {
            res += map[char2];
            i += 2;
        } else {
            res += map[char];
            ++i;
        }
    }

    return res;
};