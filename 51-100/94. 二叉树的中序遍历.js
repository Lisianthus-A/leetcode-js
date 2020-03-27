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
var inorderTraversal = function(root) {
    let res = [];
    if (!root) {  //空树
        return res;
    }
    //递归遍历
    const foo = (tree) => {
        if (tree.left) {
            foo(tree.left);
            res.push(tree.val);
            if (tree.right) {
                foo(tree.right);
            }
        } else {
            res.push(tree.val);
            if (tree.right) {
                foo(tree.right);
            }
        }
    }
    foo(root);
    return res;
};