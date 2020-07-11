/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    let prev = null;
    let next = head ? head.next : null;
    let h = head;
    while (head) {
        if (head.val !== val) {
            prev = head;
        } else if (h === head) {
            h = next;
        } else {
            prev.next = next;
        }
        next = next ? next.next : null;
        head = head.next;
    }


    return h;
};