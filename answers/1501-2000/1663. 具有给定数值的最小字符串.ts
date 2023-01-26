function getSmallestString(n: number, k: number): string {
    const arr = new Array(n).fill("a");
    let remain = k - n;
    for (let i = arr.length - 1; i >= 0; --i) {
        if (remain <= 0) {
            break;
        }
        const replaceCharCode = Math.min(remain + 1, 26);
        remain -= replaceCharCode - 1;
        arr[i] = String.fromCharCode(replaceCharCode + 96);
    }

    return arr.join("");
};