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

function mergeInBetween(list1: ListNode | null, a: number, b: number, list2: ListNode | null): ListNode | null {
    if (list1 === null || list2 === null) {
        return list1;
    }

    let beforeA = list1;
    let afterB = list1;
    let node = list1;
    let index = 0;
    while(node) {
        if (index === a - 1) {
            beforeA = node;
        } else if (index === b + 1) {
            afterB = node;
            break;
        }
        node = node.next;
        ++index;
    }

    beforeA.next = list2;
    node = list2;
    while (node.next) {
        node = node.next;
    }
    node.next = afterB;

    return list1;
};