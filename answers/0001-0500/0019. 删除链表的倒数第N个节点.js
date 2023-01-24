/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let len = 0;
    let h = head;
    for (let p = head; p; p = p.next) {  //得到链表长度
        len++;
    }
    if (len === 1) {  
        return null;
    } else if (len === n) {
        return head.next;
    }
    for (let i = 0; i < len - n - 1; i++) {  //得到倒数第n + 1个节点
        h = h.next;
    }
    h.next = h.next.next;  //跳过倒数第n个节点
    return head;
};