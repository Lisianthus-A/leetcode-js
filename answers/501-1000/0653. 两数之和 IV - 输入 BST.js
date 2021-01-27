/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    const vals = [];
    const helper = (node) => {
        if (!node) {
            return;
        }
        vals.push(node.val);
        helper(node.left);
        helper(node.right);
    }
    helper(root);

    for (let i = 0; i < vals.length - 1; i++) {
        for (let j = i + 1; j < vals.length; j++) {
            if (vals[i] + vals[j] === k) {
                return true;
            }
        }
    }

    return false;
};