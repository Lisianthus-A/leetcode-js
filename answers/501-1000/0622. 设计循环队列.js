/**
 * @param {number} k
 */
var MyCircularQueue = function (k) {
    this.len = k;
    this.arr = [];
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
    if (this.arr.length < this.len) {
        this.arr.push(value);
        return true;
    }

    return false;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
    if (this.arr.length) {
        this.arr.shift();
        return true;
    } 

    return false;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
    return this.arr[0] ?? -1;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
    return this.arr[this.arr.length - 1] ?? -1;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
    return this.arr.length === 0;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
    return this.arr.length === this.len;
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */