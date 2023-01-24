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
function largestValues(root: TreeNode | null): number[] {
    let queue: TreeNode[] = root ? [root] : [], nextQueue: TreeNode[] = [];
    const res: number[] = [];

    while (queue.length > 0) {
        let max = -Infinity;
        for (const node of queue) {
            max = Math.max(node.val, max);
            node.left && nextQueue.push(node.left);
            node.right && nextQueue.push(node.right);
        }
        res.push(max);

        queue = nextQueue;
        nextQueue = [];

    }

    return res;
};