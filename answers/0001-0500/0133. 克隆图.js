/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
    if (!node) {
        return null;
    }

    const cloned = {};  //保存已经克隆过的节点
    const clone = (node) => {
        if (cloned[node.val]) {  //已经克隆过
            return cloned[node.val];
        }

        //克隆节点
        const cloneNode = new Node(node.val);
        cloned[node.val] = cloneNode;

        //克隆邻居
        for (const neighbor of node.neighbors) {
            cloneNode.neighbors.push(clone(neighbor));
        }

        return cloneNode;
    }

    return clone(node);
};