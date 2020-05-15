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
var maxDepth = function(root) {
    if (!root) {  //空
        return 0;
    }
    let max = 1;
    max += Math.max(maxDepth(root.left), maxDepth(root.right));
    return max;
};