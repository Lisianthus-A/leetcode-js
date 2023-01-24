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

const helper = (node: TreeNode | null): string => {
  if (node === null) {
    return '';
  }

  const str = node.left === null && node.right === null
    ? `-${node.val.toString()}`
    : '';

  return str + helper(node.left) + helper(node.right);
}

function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
  return helper(root1) === helper(root2);
};