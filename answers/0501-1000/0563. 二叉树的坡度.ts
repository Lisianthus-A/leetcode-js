/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function findTilt(root: TreeNode | null): number {
    const helper = (node: TreeNode | null) => {
        if (!node) {
            return 0;
        }

        const left = helper(node.left);
        const right = helper(node.right);
        res += Math.abs(left - right);
        return node.val + left + right;
    }

    let res = 0;
    helper(root);
    return res;
};