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

//返回下一个 val 不为 value 的节点或者 null
const getNextNodeByValue = (value: number, beginNode: ListNode): ListNode | null => {
    let node = beginNode;
    while (true) {
        if (node.val !== value) {
            return node;
        }

        if (node.next) {
            node = node.next;
        } else {
            return null;
        }
    }
}

function deleteDuplicates(head: ListNode | null): ListNode | null {
    //处理头节点
    let h = head;
    while (h && h.next && h.next.val === h.val) {
        h = getNextNodeByValue(h.val, h.next);
    }

    if (h === null) {
        return null;
    }

    const next = deleteDuplicates(h.next);
    h.next = next;

    return h;
};