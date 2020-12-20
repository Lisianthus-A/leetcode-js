function complexNumberMultiply(a: string, b: string): string {
    const [a1, a2] = a.split('+');
    const [b1, b2] = b.split('+');
    const v = +a1 * +b1 - +a2.slice(0, -1) * +b2.slice(0, -1);
    const i = +a1 * +b2.slice(0, -1) + +b1 * +a2.slice(0, -1);

    return `${v}+${i}i`;
};