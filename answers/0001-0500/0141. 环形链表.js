/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head, pos) {
    let nodes = [];
    while (head) {
        let idx = nodes.indexOf(head);
        if (idx === -1) {
            nodes.push(head);
        } else {
            return true;
        }
        head = head.next;
    }
    return false;
};