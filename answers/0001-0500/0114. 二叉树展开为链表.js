/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    if (root === null) {
        return null;
    }

    //遍历二叉树
    const getNodes = (node) => {
        let arr = [node];
        arr = node.left ? [...arr, ...getNodes(node.left)] : arr;
        arr = node.right ? [...arr, ...getNodes(node.right)] : arr;
        return arr;
    }
    let nodes = getNodes(root);

    //遍历数组，数组中每个元素的right是下一个元素
    for (let i = 0; i < nodes.length - 1; i++) {
        nodes[i].left = null;
        nodes[i].right = nodes[i + 1];
    }

    //最后一个元素
    nodes[nodes.length - 1].right = null;
};