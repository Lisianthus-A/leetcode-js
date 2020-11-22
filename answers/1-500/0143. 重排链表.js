/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    //空表
    if (head === null) {
        return null;
    }

    //遍历链表，存入nodes数组
    let nodes = [];
    while (head) {
        nodes.push(head);
        head = head.next;
    }

    let flag = true;  //标志当前需要处理的是首节点还是尾节点
    while (nodes.length > 0) {
        if (flag) {
            flag = false;
            let node = nodes.shift();
            node.next = nodes[nodes.length - 1];
        } else {
            flag = true;
            let node = nodes.pop();
            node.next = nodes[0];
        }
    }
};