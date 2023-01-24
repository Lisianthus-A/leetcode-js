class MyQueue {
    private stack: Array<number>;
    private tempStack: Array<number>;

    constructor() {
        this.stack = [];
        this.tempStack = [];
    }

    push(x: number): void {
        this.stack.push(x);
    }

    pop(): number {
        while (this.stack.length) {
            this.tempStack.push(this.stack.pop());
        }
        const res = this.tempStack.pop();
        while (this.tempStack.length) {
            this.stack.push(this.tempStack.pop());
        }
        return res;
    }

    peek(): number {
        while (this.stack.length) {
            this.tempStack.push(this.stack.pop());
        }
        const res = this.tempStack.pop();
        this.tempStack.push(res);
        while (this.tempStack.length) {
            this.stack.push(this.tempStack.pop());
        }
        return res;
    }

    empty(): boolean {
        return this.stack.length === 0;
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */