/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {
    if (root === null) {
        return 0;
    }

    //保存根到叶子节点代表的数字的字符串
    let arr = [];

    //找出根到叶子节点代表的数字
    const foo = (node, str = '') => {
        str += node.val;
        node.left ? foo(node.left, str) : null;
        node.right ? foo(node.right, str) : null;
        if (node.left === null && node.right === null) {
            arr.push(str);
        }
    }
    foo(root);
    
    return arr.reduce((cur, acc) => cur + +acc, 0);
};