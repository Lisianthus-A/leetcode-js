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
var findMode = function (root) {
    const helper = (node) => {
        if (!node) {
            return;
        }
        obj[node.val] = obj[node.val] ? obj[node.val] + 1 : 1;
        helper(node.left);
        helper(node.right);
    }
    const obj = {};
    helper(root);

    let res = [], max = 0;
    for (const [val, count] of Object.entries(obj)) {
        if (count > max) {
            max = count;
            res = [];
            res.push(+val);
        } else if (count === max) {
            res.push(+val);
        }
    }
    return res;
};