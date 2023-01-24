function evalRPN(tokens: string[]): number {
    const stack: Array<number> = [];
    for (const char of tokens) {
        switch (char) {
            case '+':
                stack.push(stack.pop() + stack.pop());
                break;
            case '-':
                stack.push(-stack.pop() + stack.pop());
                break;
            case '*':
                stack.push(stack.pop() * stack.pop());
                break;
            case '/':
                const n1 = stack.pop();
                const n2 = stack.pop();
                stack.push(n2 / n1 >> 0);
                break;
            default:
                stack.push(Number(char));
        }
    }

    return stack.reduce((prev, curr) => prev + curr);
};