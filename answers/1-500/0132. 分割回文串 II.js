//判断是否回文
const isValid = (str: string): boolean => {
    let left = 0, right = str.length - 1;
    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
}

//超时
function minCut(s: string): number {
    let res = Infinity;

    const helper = (str: string, idx: number, array: Array<string>) => {
        if (idx >= s.length) {
            if (isValid(str)) {
                array.push(str);
                res = Math.min(res, array.length - 1);
            }
            return;
        }

        helper(str + s[idx], idx + 1, array.slice());

        if (isValid(str)) {
            array.push(str);
            helper(s[idx], idx + 1, array);
        }
    }

    helper(s[0], 1, []);

    return res;
};