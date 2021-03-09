function removeDuplicates(S: string): string {
    const stack: Array<string> = [];
    for (const char of S) {
        const isMatch = stack.slice(-1)[0] === char;  //栈顶字符与 char 相同
        while (stack.slice(-1)[0] === char) {  //不断弹出与 char 相同的栈顶字符
            stack.pop();
        }
        if (isMatch) {
            continue;
        }
        stack.push(char);
    }

    return stack.join('');
};