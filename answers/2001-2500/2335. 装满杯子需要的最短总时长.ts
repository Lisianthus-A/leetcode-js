function fillCups(amount: number[]): number {
    amount.sort((a, b) => a - b);
    const [a, b, c] = amount;
    if (a + b <= c) {
        return c;
    }

    return Math.ceil((a + b - c) / 2) + c;
};