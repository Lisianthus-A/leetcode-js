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
var countNodes = function(root, count = 1) {
    if (!root) {
        return 0;
    }
    count += countNodes(root.left, count) + countNodes(root.right, count);

    return count;
};