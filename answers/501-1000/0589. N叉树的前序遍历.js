/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function (root) {
    if (!root) {
        return [];
    }

    let res = [root.val];
    for (const node of root.children) {
        res = [...res, ...preorder(node)];
    }

    return res;
};