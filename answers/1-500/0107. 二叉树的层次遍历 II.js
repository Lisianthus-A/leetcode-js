/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    if (root === null) {
        return [];
    }

    let res = [[root.val]];
    let nodes = [[root]]  //存放每层的所有节点
    let idx = 0;  //nodes[0]为第一层 nodes[1]为第二层 以此类推
    while (true) {
        let arr = [];
        let nodeArr = [];
        //从每一层中获取下一层的值和节点
        for (let node of nodes[idx]) {
            if (node.left) {
                arr.push(node.left.val);
                nodeArr.push(node.left);
            }
            if (node.right) {
                arr.push(node.right.val);
                nodeArr.push(node.right);
            }
        }
        idx++;
        if (arr.length === 0) {
            break;
        }
        res.push(arr);
        nodes.push(nodeArr);
    }
    return res.reverse();
};