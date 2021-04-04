function numRabbits(answers: number[]): number {
    //统计各数字出现次数
    const o = {};
    for (const num of answers) {
        o[num] = o[num] + 1 || 1;
    }

    let res = 0;
    for (const numString in o) {
        //数字
        const num = Number(numString);
        //出现次数
        const count = o[numString];

        //商
        let quotient = count / (num + 1) >> 0;
        //余数
        const remainder = count % (num + 1);

        remainder && ++quotient;
        res += quotient * (num + 1);
    }


    return res;
};