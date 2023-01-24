/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    if (head === null) {
        return head;
    }
    let arr1 = [];  //小于x的节点
    let arr2 = [];  //大于等于x的节点
    while(head) {
        if (head.val < x) {
            arr1.push(head);
        } else {
            arr2.push(head);
        }
        head = head.next;
    }
    //开始分隔
    let _head = null;  //新的头节点
    let tail = null;  //尾节点
    if (arr1[0]) {
        _head = arr1[0];
        tail = arr1[0];
    } else {
        _head = arr2[0];
        tail = arr2[0];
    }
    for (let i = 0; i < arr1.length - 1; i++) {
        arr1[i].next = arr1[i + 1];
        tail = arr1[i + 1];
    }
    for (let i = 0; i < arr2.length; i++) {
        tail.next = arr2[i];
        tail = arr2[i];
    }
    tail.next = null;
    return _head;
};