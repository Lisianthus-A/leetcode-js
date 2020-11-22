/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
    //逐层遍历节点
    const levelTraverse = (node) => {
        if (node === null) {
            return [];
        }
        let result = [[node]];
        let queue = [node];  //当前层树节点
        while (queue[0]) {
            let nextQueue = [];  //下一层的树节点
            for (let node of queue) {
                node.left ? nextQueue.push(node.left) : null;
                node.right ? nextQueue.push(node.right) : null;
            }
            if (nextQueue.length > 0) {
                result.push(nextQueue);
            }
            queue = nextQueue;
        }
        return result;
    }

    let levelNodes = levelTraverse(root);

    for (let nodeArr of levelNodes) {
        for (let i = 0; i < nodeArr.length; i++) {
            nodeArr[i].next = nodeArr[i + 1] || null;
        }
    }

    return root;
};