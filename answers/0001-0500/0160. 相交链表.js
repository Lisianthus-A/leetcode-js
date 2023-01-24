/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if (!headA || !headB) {
        return null;
    }

    let nodes = [];
    while (headA) {
        nodes.push(headA);
        headA = headA.next;
    }

    while (headB) {
        if (nodes.indexOf(headB) !== -1) {
            return headB;
        }
        headB = headB.next;
    }
    
    return null;
};