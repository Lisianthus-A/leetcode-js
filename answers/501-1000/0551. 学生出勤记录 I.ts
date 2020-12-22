function checkRecord(s: string): boolean {
    let a = 0, l = 0;
    for (const char of s) {
        if (char === 'A' && ++a > 1) {
            return false;
        } else if (char === 'L') {
            if (l > 1) {
                return false;
            }
            l++;
        } else {
            l = 0;
        }
    }

    return true;
};