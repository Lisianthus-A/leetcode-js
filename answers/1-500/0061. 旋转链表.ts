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

function rotateRight(head: ListNode | null, k: number): ListNode | null {
    if (!head) {
        return null;
    }

    const nodes: ListNode[] = [];
    while (head) {
        nodes.push(head);
        head = head.next;
    }

    k %= nodes.length;
    if (k === 0) {
        return nodes[0];
    }

    while (k) {
        nodes.unshift(nodes.pop());
        --k;
    }

    for (let i = 1; i < nodes.length; i++) {
        nodes[i - 1].next = nodes[i];
    }
    nodes.pop().next = null;

    return nodes[0];
};