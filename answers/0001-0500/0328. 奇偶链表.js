/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    if (!head || !head.next  || !head.next.next) {
        return head;
    }

    let h = head;  //头节点
    let firstEvenNode = head.next;  //第一个偶节点
    let lastOddNode = head;  //最后一个奇节点
    let prev = head.next;  //前一个节点
    let prev2 = head;  //之前节点的前一个节点
    let isOdd = true;  //是否奇节点

    head = head.next.next;  //head跳到第三个节点
    while (head) {
        if (isOdd) {  //奇节点
            lastOddNode = head;
        }
        prev2.next = head;

        prev2 = prev;
        prev = head;
        head = head.next;
        isOdd = !isOdd;
    }

    //最后奇节点next为第一个偶节点
    lastOddNode.next = firstEvenNode;

    if (isOdd) {  //最后的偶节点是prev
        prev.next = null;
    } else {  //最后的偶节点是prev2
        prev2.next = null;
    }

    return h;
};