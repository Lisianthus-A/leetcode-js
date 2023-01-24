/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root, cur = [], res = []) {
    if (!root) {
        return [];
    }

    let curr = cur.slice();
    curr.push(root.val);
    
    if (!root.left && !root.right) {
        let str = '' + curr[0];
        for (let i = 1; i < curr.length; i++) {
            str += '->' + curr[i];
        }
        res.push(str);
    }

    root.left ? binaryTreePaths(root.left, curr, res) : null;
    root.right ? binaryTreePaths(root.right, curr, res) : null;
    return res;
};