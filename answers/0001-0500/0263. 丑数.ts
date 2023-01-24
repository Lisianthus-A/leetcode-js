function isUgly(n: number): boolean {
    if ([1, 2, 3, 5].indexOf(n) !== -1) {
        return true;
    }

    if (n === 0) {
        return false;
    }

    if (n % 5 === 0) {
        return isUgly(n / 5);
    }

    if (n % 3 === 0) {
        return isUgly(n / 3);
    }

    if (n % 2 === 0) {
        return isUgly(n / 2);
    }

    return false;
};