function xorOperation(n: number, start: number): number {
    const array = [];
    for (let i = 0; i < n; ++i) {
        array.push(start + 2 * i);
    }

    return array.reduce((prev, curr) => prev ^ curr, 0)
};