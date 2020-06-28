/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 */
var BSTIterator = function(root) {
    //获取所有节点的值，返回数组
    const getValues = (node) => {
        if (node === null) {
            return [];
        }
        let values = [node.val];
        values = [...values, ...getValues(node.left), ...getValues(node.right)];
        return values;
    }
    let values = getValues(root);
    values.sort((a, b) => a - b); //按升序排序

    this.data = values;
    this.current = 0;
};

/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    return this.data[this.current++];
};

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    return this.current < this.data.length;
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */