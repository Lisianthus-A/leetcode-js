const array: Array<number> = [];

function countBits(num: number): number[] {
    while (array.length < num + 1) {
        const str = array.length.toString(2);
        let count = 0;
        for (const char of str) {
            char === '1' && count++;
        }
        array.push(count);
    }

    return array.slice(0, num + 1);
};