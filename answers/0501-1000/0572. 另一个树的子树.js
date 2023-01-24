/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function (s, t) {
    if (!s) {
        return false;
    }
    
    const isSameTree = (p, q) => {  //判断 p q 是否为相同的树
        if (!p && !q) {
            return true;
        }
        if (!p || !q) {
            return false;
        }
        return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    }

    return isSameTree(s, t) || isSubtree(s.left, t) || isSubtree(s.right, t);

};