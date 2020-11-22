/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    let arr1 = [], arr2 = [], arr3 = [], num = 1;
    while (head) {
        if (num < m) {  //反转前节点
            arr1.push(head);
        } else if (num <= n) {  //需反转节点
            arr2.push(head);
        } else {  //反转后节点
            arr3.push(head);
        }
        head = head.next;
        num++;
    }
    arr1 = [...arr1, ...arr2.reverse(), ...arr3];
    if (arr1.length === 1) {
        return arr1[0];
    }
    for (let i = 0; i < arr1.length - 1; i++) {
        arr1[i].next = arr1[i + 1];
    }
    arr1.pop().next = null;
    return arr1[0];
};