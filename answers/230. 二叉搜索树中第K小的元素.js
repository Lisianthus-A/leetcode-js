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
 * @return {number}
 */
var kthSmallest = function(root, k) {
    const getNodes = (node) => {
        if(!node) {  //null
            return [];
        }

        return [node.val, ...getNodes(node.left), ...getNodes(node.right)];
    }
    let arr = getNodes(root).sort((a, b) => a - b);
    return arr[k - 1];
};