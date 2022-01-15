function totalMoney(n: number): number {
    const week = n / 7 >> 0;
    const day = n % 7;

    return 7 * week * (week + 7) / 2 + day * (1 + 2 * week + day) / 2;
};