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
var preorderTraversal = function(root) {
    //空表
    if (root === null) {
        return [];
    }

    let res = [root.val];
    res = [...res, ...preorderTraversal(root.left), ...preorderTraversal(root.right)];
    return res;
};