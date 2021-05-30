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

interface Queue extends Array<any> {
    [index: number]: {
        parent: TreeNode | null;
        node: TreeNode;
    },
}

interface Find {
    parent: TreeNode | null;
    value: boolean;
}

function isCousins(root: TreeNode | null, x: number, y: number): boolean {
    let queue: Queue = [{ parent: null, node: root }];
    let nextQueue: Queue = [];
    while (queue.length > 0) {
        let findX: Find = { parent: null, value: false }, findY: Find = { parent: null, value: false };
        for (const { parent, node } of queue) {
            if (node.val === x) {
                findX = { parent, value: true };
            }
            if (node.val === y) {
                findY = { parent, value: true };
            }
            node.left && nextQueue.push({ parent: node, node: node.left });
            node.right && nextQueue.push({ parent: node, node: node.right });
        }

        if (findX.value && findY.value) {
            if (findX.parent === findY.parent) {
                findX = { parent: null, value: false };
                findY = { parent: null, value: false };
            } else {
                return true;
            }
        }

        queue = nextQueue;
        nextQueue = [];
    }

    return false;
};