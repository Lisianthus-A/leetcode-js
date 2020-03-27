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
var isSymmetric = function(root) {
    if (!root) {
        return true;
    }
    const foo = (p, q) => {
        if (!p && !q) {  //均为null
        return true;
        } else if (!p || !q) {  //p或q为null
            return false;
        } else {
            return p.val === q.val && foo(p.left, q.right) && foo(p.right, q.left);
        }
    } 
    return foo(root.left, root.right);
};