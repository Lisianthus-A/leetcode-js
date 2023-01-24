/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function removeElements(head: ListNode | null, val: number): ListNode | null {
    if (!head) {
        return null;
    }

    let h = head;
    while (h && h.val === val) {
        h = h.next;
    }

    if (!h) {
        return null;
    }

    let pre = h;
    let cur = h.next;
    while (cur) {
        if (cur.val === val) {
            pre.next = cur.next;
            cur = cur.next;
        } else {
            pre = cur;
            cur = cur.next;
        }
    }


    return h;
};