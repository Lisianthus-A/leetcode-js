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

function diameterOfBinaryTree(root: TreeNode | null): number {
    if (!root) {
        return 0;
    }
    
    const getDepth = (node: TreeNode | null): number => {
        if (!node) {
            return 0;
        }

        const l = getDepth(node.left);
        const r = getDepth(node.right);

        res = Math.max(l + r + 1, res);

        return Math.max(l, r) + 1;
    }
    let res = 0;
    getDepth(root);
    return res - 1;

};