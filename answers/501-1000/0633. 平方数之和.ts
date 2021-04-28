function judgeSquareSum(c: number): boolean {
    const sqrt = c ** 0.5;
    let a = 0, b = sqrt >> 0;
    while (a <= b) {
        const current = a ** 2 + b ** 2;
        if (current === c) {
            return true;
        }

        if (current > c) {
            --b;
        } else {
            ++a;
        }
    }

    return false;
};