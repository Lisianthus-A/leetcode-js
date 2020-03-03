/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if (head === null) {
        return null;
    }
    let p = head.next;
    let prev = head;
    while (p) {
        if (prev.val === p.val) {  //重复
            prev.next = p.next;
        } else {
            prev = p;
        }
        p = p.next;
    }
    return head;
};