/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function (head) {
    let node = head;
    let uncheckedNode = null;
    while (node) {
        if (node.child) {
            //保存链表原来的next，遍历完扁平后的链表再遍历剩余链表
            uncheckedNode = node.next;
            //子node的上一个node为该node
            node.child.prev = node;

            //扁平化child
            node.next = flatten(node.child);

            //完成扁平化child后，child置空
            node.child = null;
        }

        //下一个node为null并且还有剩余链表未遍历
        if (!node.next && uncheckedNode) {
            uncheckedNode.prev = node;
            node.next = uncheckedNode;
            uncheckedNode = null;
        }

        node = node.next;
    }

    return head;
};