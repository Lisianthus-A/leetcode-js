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

function minDiffInBST(root: TreeNode | null): number {
    const helper = (node: TreeNode | null): void => {
        if (!node) {
            return;
        }

        vals.push(node.val);
        helper(node.left);
        helper(node.right);
    }


    const vals: number[] = [];
    helper(root);
    vals.sort((a, b) => a - b);

    let res: number = Infinity;
    for (let i = 0; i < vals.length - 1; i++) {
        const abs: number = Math.abs(vals[i] - vals[i + 1]);
        if (abs < res) {
            res = abs;
        }
    }

    return res;
};