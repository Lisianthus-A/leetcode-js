/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

class BSTIterator {
    private values: Array<number>;
    private index: number;
    constructor(root: TreeNode | null) {
        this.values = [];
        this.index = -1;
        this.helper(root);
    }

    next(): number {
        return this.values[++this.index];
    }

    hasNext(): boolean {
        return this.values[this.index + 1] !== undefined;
    }

    //中序遍历
    private helper(node: TreeNode | null): void {
        if (!node) {
            return;
        }

        this.helper(node.left);
        this.values.push(node.val);
        this.helper(node.right);
    }
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */