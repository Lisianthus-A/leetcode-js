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
var postorderTraversal = function(root) {
    if (root === null) {
        return [];
    }

    let res = [];
    res = [...res, ...postorderTraversal(root.left)];
    res = [...res, ...postorderTraversal(root.right)];
    res.push(root.val);
    return res;
};