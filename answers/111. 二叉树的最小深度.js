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
var minDepth = function(root) {
    let res = 0;
    let queue = [root];
    while (queue[0]) {
        res++;
        let nextQueue = [];
        for (let node of queue) {
            if (!node.left && !node.right) {
                return res;
            }
            node.left ? nextQueue.push(node.left) : null;
            node.right ? nextQueue.push(node.right) : null;
        }
        queue = nextQueue;
    }
    return res;
};