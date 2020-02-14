/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    //将倒数第k个节点作为头节点，原先的头节点接到尾部即可
    let len = 0;
    let p = head;
    while (p) {  //得到链表长度
        p = p.next;
        len++;
    }
    if (!len || k % len === 0) {  //过滤无需旋转的链表
        return head;
    }
    p = head;
    let num = len - k % len;
    let prev = null;
    while (num--) {  //循环结束后，p为倒数第k个节点，prev为p的上一个节点
        prev = p;
        p = p.next;
    }
    let newHead = p;
    prev.next = null;
    while (p.next) {  //循环结束后，p为null的前一个节点
        p = p.next;
    }
    p.next = head;
    return newHead;
};