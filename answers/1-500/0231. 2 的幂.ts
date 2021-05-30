function isPowerOfTwo(n: number): boolean {
    if (n < 0) {
        return false;
    }
    if (n === 1) {
        return true;
    }
    if (n === 0) {
        return false;
    }

    while (n % 2 === 0) {
        n /= 2;
        if (n === 1) {
            return true;
        }
    }

    return false;
};