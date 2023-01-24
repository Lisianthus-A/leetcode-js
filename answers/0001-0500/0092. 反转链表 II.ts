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

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
    const nodes: Array<ListNode> = [];
    while (head !== null) {
        nodes.push(head);
        head = head.next;
    }

    let _left = left - 1, _right = right - 1;
    while (_left < _right) {
        [nodes[_left], nodes[_right]] = [nodes[_right], nodes[_left]];
        _left++;
        _right--;
    }

    for (let i = 0; i < nodes.length - 1; i++) {
        nodes[i].next = nodes[i + 1];
    }
    nodes[nodes.length - 1].next = null;

    return nodes[0];
};