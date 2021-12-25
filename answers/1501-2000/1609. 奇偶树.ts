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

function isEvenOddTree(root: TreeNode | null): boolean {
    let index = 0,
        nodeList = [root];

    while (nodeList.length > 0) {
        let leftVal = nodeList[0].val;
        if (index % 2 === 1) {
            if (leftVal % 2 === 1) {
                return false;
            }
        } else {
            if (leftVal % 2 === 0) {
                return false;
            }
        }

        let nextList = [];
        if (nodeList[0].left) {
            nextList.push(nodeList[0].left);
        }
        if (nodeList[0].right) {
            nextList.push(nodeList[0].right);
        }

        for (let i = 1; i < nodeList.length; ++i) {
            const node = nodeList[i];
            if (index % 2 === 1) {
                // 奇数下标层上的所有节点的值都是偶整数，从左到右按顺序严格递减
                if (node.val % 2 === 1 || leftVal <= node.val) {
                    return false;
                }
            } else {
                // 偶数下标层上的所有节点的值都是奇整数，从左到右按顺序严格递增
                if (node.val % 2 === 0 || leftVal >= node.val) {
                    return false;
                }
            }

            if (node.left) {
                nextList.push(node.left);
            }
            if (node.right) {
                nextList.push(node.right);
            }
            leftVal = node.val;
        }

        nodeList = nextList;
        ++index;
    }

    return true;
};