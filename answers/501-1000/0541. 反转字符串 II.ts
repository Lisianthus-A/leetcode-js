function reverseStr(s: string, k: number): string {
    const res: Array<string> = [];
    const stack: Array<string> = [];
    let flag: boolean = true, num: number = 0;
    for (const char of s) {
        if (flag) {  //反转
            stack.push(char);
        } else {
            while(stack.length) {
                res.push(stack.pop());
            }
            res.push(char);
        }
        if (++num >= k) {
            flag = !flag;
            num = 0;
        }
    }

    while (stack.length) {
        res.push(stack.pop());
    }

    return res.join('');
};