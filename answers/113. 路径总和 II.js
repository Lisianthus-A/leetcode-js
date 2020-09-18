/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function (root, sum) {
    if (!root) {  //null
        return [];
    }

    const dfs = (target, node, combine) => {  //目标  当前节点  当前组合
        if (target === 0 && node.left === node.right) {  //数组和为sum,并且为叶子节点
            res.push(combine);
            return;
        }

        node.left && dfs(target - node.left.val, node.left, [...combine, node.left.val]);
        node.right && dfs(target - node.right.val, node.right, [...combine, node.right.val]);
    }

    const res = [];
    dfs(sum - root.val, root, [root.val]);
    return res;
};