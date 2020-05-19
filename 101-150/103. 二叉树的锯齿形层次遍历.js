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
var zigzagLevelOrder = function(root) {
    if (root === null) {
        return [];
    }

    let result = [];
    let queue = [root];  //当前层树节点
    let flag = true;

    while (queue[0]) {
        let arr = [];  //存放当前层所有val
        let nextQueue = [];  //下一层的树节点
        for (let node of queue) {
            arr.push(node.val);
            if (flag) {
                node.left ? nextQueue.push(node.left) : null;
                node.right ? nextQueue.push(node.right) :null;
            } else {
                node.right ? nextQueue.push(node.right) :null;
                node.left ? nextQueue.push(node.left) : null;
            }
        }
        result.push(arr);
        nextQueue.reverse();
        flag = !flag;
        queue = nextQueue;
    }
    return result;
};