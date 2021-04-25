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

function increasingBST(root: TreeNode | null): TreeNode | null {
    const getNodes = (node: TreeNode): Array<number> => {
        const nodes = [];

        node.left && nodes.push(...getNodes(node.left));
        node.right && nodes.push(...getNodes(node.right));
        nodes.push(node.val);

        return nodes;
    }

    const nodes = getNodes(root);
    nodes.sort((a, b) => a - b);

    const h = new TreeNode(nodes[0]);
    let prev = h;

    for (let i = 1; i < nodes.length; ++i) {
        prev.right = new TreeNode(nodes[i]);
        prev = prev.right;
    }

    return h;
};