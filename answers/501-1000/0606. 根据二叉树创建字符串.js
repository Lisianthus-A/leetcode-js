/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t
 * @return {string}
 */
var tree2str = function(t) {
    if (!t) {
        return '';
    }

    const left = tree2str(t.left);
    const right = tree2str(t.right);
    let res = `${t.val}`;
    if (!left && right) {  //只有 left 为空节点
        res += `()(${right})`;
    } else if (left && !right) {  //只有 right 为空节点
        res += `(${left})`;
    } else if (left && right) {
        res += `(${left})(${right})`;
    }


    return res;
};