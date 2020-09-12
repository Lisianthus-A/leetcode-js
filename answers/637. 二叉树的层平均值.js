/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function (root) {
    const result = [];
    if (!root) {  //null
        return result;
    }
    let queue = [root];

    while (true) {
        const nextQueue = [];
        const values = [];
        while (queue.length) {  //逐层遍历，val存入values数组
            const node = queue.pop();
            values.push(node.val);
            node.left ? nextQueue.push(node.left) : null;
            node.right ? nextQueue.push(node.right) : null;
        }

        result.push(values.reduce((prev, curr) => prev + curr) / values.length);
        if (nextQueue.length === 0) {
            return result;
        }
        queue = nextQueue;
    }
}; 