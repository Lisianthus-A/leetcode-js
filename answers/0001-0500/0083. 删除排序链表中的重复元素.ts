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
//从 head 开始，获取下一个 val 不为 value 的节点
const getNextNode = (value: number, head: ListNode): ListNode | null => {
    let h = head;
    while (h) {
        if (h.val !== value) {
            return h;
        }
        h = h.next;
    }

    return null;
}

function deleteDuplicates(head: ListNode | null): ListNode | null {
    if (!head) {
        return null;
    }

    let node = head;
    while (node) {
        node.next = getNextNode(node.val, node);
        node = node.next;
    }

    return head;
};