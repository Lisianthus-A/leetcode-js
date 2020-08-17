/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum, current = 0) {
    if (root === null) {
        return false;
    }
    if (current + root.val === sum && !root.left && !root.right) {
        return true;
    } else {
        return hasPathSum(root.left, sum, current + root.val) || hasPathSum(root.right, sum, current + root.val);
    }
};