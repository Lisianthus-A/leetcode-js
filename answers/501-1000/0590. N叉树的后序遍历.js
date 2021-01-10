/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function(root) {
    if (!root) {
        return [];
    }
    
    const res = [];

    for (const node of root.children) {
        res.push(...postorder(node));
    }
    res.push(root.val);

    return res;
};