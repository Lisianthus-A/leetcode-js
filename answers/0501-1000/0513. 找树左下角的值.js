/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValue = function(root) {
    let queue = [root], nextQueue = [];

    while (true) {
        for (const node of queue) {
            node.left && nextQueue.push(node.left);
            node.right && nextQueue.push(node.right);
        }
        if (nextQueue.length === 0) {
            return queue[0].val;
        }
        queue = nextQueue;
        nextQueue = [];
    }
};