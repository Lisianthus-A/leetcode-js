/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    const arr = [];
    let num = 1;
    while (num * 26 < n) {
        num *= 26;
    }
    while (num >= 1) {
        const div = parseInt(n / num);
        arr.push(div);
        n -= num * div;
        num /= 26;
    }
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] <= 0 && arr[i - 1] !== undefined) {
            arr[i - 1]--;
            (arr[i] += 26);
        }
        arr[i] = arr[i] > 0 ? String.fromCharCode(64 + arr[i]) : '';
    }
    return arr.join('');
};