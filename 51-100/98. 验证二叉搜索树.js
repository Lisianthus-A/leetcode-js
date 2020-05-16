/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root, min = Infinity, max = -Infinity) {
    if (root === null) {
        return true;
    }
    if (root.val >= min || root.val <= max) {
        return false;
    }
    return isValidBST(root.left, root.val, max) && isValidBST(root.right, min, root.val);
};