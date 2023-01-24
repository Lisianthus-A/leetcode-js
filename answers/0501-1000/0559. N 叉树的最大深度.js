/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function (root) {
    return root ? Math.max(...root.children.map(node => maxDepth(node) + 1), 1) : 0;
};