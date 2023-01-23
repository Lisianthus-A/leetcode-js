function calculateTax(brackets: number[][], income: number): number {
    let res = Math.min(income, brackets[0][0]) * brackets[0][1] / 100;
    let preBracket = brackets[0];
    if (income <= preBracket[0]) {
        return res;
    }
    for (let i = 1; i < brackets.length; ++i) {
        const [upper, percent] = brackets[i];
        if (income > upper) {
            res += (upper - preBracket[0]) * percent / 100;
            preBracket = brackets[i];
        } else {
            res += (income - preBracket[0]) * percent / 100;
            break;
        }
    }

    return res;
};