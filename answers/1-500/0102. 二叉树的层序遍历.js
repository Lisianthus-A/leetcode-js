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
var levelOrder = function(root) {
    if (root === null) {
        return [];
    }

    let result = [];
    let queue = [root];  //当前层树节点

    while (queue[0]) {
        let arr = [];  //存放当前层所有val
        let nextQueue = [];  //下一层的树节点
        for (let node of queue) {
            arr.push(node.val);
            node.left ? nextQueue.push(node.left) : null;
            node.right ? nextQueue.push(node.right) :null;
        }
        result.push(arr);
        queue = nextQueue;
    }
    return result;
};