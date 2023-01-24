//判断是否回文串
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

function partition(s: string): string[][] {
    const res = [];

    const helper = (str: string, idx: number, array: Array<string>) => {
        if (idx >= s.length) {
            if (isValid(str)) {
                array.push(str);
                res.push(array);
            }
            return;
        }

        //继续选取字符串
        helper(str + s[idx], idx + 1, array.slice());

        //停止选取
        if (isValid(str)) {
            array.push(str);
            helper(s[idx], idx + 1, array);
        }
    }

    helper(s[0], 1, []);

    return res;
};