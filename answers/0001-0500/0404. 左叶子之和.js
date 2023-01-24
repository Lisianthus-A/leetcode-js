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
var sumOfLeftLeaves = function(root) {
    if (!root) {  //null
        return 0;
    }

    const helper = (node, isLeft) => {
        if (!node.left && !node.right && isLeft) {  //左叶
            res += node.val;
            return;
        }
        node.left && helper(node.left, true);
        node.right && helper(node.right, false);
    }

    let res = 0;
    helper(root, false);
    return res;
};