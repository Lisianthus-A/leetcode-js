function reverse(x: number): number {
    const arr = String(x).split('');
    for (let left = 1, right = arr.length - 1; left < right; ++left, --right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
    }

    if (arr[0] !== '-') {
        arr.push(arr[0]);
        arr[0] = '';
    }
    
    const n = Number(arr.join(''));
    if (n < -2147483648 || n > 2147483647) {
        return 0;
    }

    return n;
};