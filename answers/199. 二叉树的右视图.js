/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
    //逐层获取val值，返回数组
    const getVals = (node) => {
        let vals = [];
        let queue = node ? [node] : [];
        while (queue[0] !== undefined) {
            let nextQueue = [];
            let currentLevelVals = [];
            for (let node of queue) {
                node.left && nextQueue.push(node.left);
                node.right && nextQueue.push(node.right);
                currentLevelVals.push(node.val);
            }
            queue = nextQueue;
            vals.push(currentLevelVals);
        }
        return vals;
    }

    let res = [];
    for (let arr of getVals(root)) {
        res.push(arr.pop());
    }
    return res;
};