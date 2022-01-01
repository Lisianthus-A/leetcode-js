function construct2DArray(original: number[], m: number, n: number): number[][] {
    if (original.length !== m * n) {
        return [];
    }

    return original.reduce((acc, cur) => {
        const lastItem = acc[acc.length - 1];
        if (lastItem.length === n) {
            acc.push([cur]);
        } else {
            lastItem.push(cur);
        }
        return acc;
    }, [[]]);

    // const res = [];

    // let index = 0;
    // for (let i = 0; i < m; ++i) {
    //     const arr = [];
    //     for (let j = 0; j < n; ++j) {
    //         arr.push(original[index++]);
    //     }
    //     res.push(arr);
    // }

    // return res;
};