/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) {
        return [];
    }

    const res = [];
    let queue = [root];  //需要遍历的队列

    while (queue.length > 0) {
        let nextQueue = [];  //下次遍历的队列
        let nums = [];
        for (let node of queue) {
            nums.push(node.val);
            if (node.children.length > 0) {  //当前节点还有子节点，将子节点添加到nextQueue
                nextQueue = [...nextQueue, ...node.children];
            }
        }
        res.push(nums);
        queue = nextQueue;
    }
    
    return res;
};