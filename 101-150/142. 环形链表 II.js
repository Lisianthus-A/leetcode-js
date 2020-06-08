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
var detectCycle = function(head) {
    let nodes = [];
    while (head) {
        let idx = nodes.indexOf(head);
        if (idx === -1) {
            nodes.push(head);
        } else {
            return nodes[idx];
        }
        head = head.next;
    }
    return null;
};