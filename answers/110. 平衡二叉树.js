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
var isBalanced = function(root) {
    if (root === null) {
        return true;
    }
    //获取高度
    const getHeight = (node) => {
        if (node === null) {
            return 0;
        }
        let height = 1;
        if (node.left || node.right) {
            height += Math.max(getHeight(node.left), getHeight(node.right));
        }
        return height;
    }

    //高度差不超过1
    if (Math.abs(getHeight(root.left) - getHeight(root.right)) <= 1) {
        return isBalanced(root.left) && isBalanced(root.right);
    } else {
        return false;
    }

};