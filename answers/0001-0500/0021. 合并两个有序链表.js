/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let arr = [];
    if (!l1 && !l2) {  //l1和l2均为空表
        return null;
    }
    //将l1和l2所有的val值存入arr
    while(l1) {
        arr.push(l1.val);
        l1 = l1.next;
    }
    while(l2) {
        arr.push(l2.val);
        l2 = l2.next;
    }
    arr = arr.sort((a, b) => a - b);  //arr排序
    let list = new ListNode(arr.shift());
    let head = list;  //表头
    while(arr.length) {  //将arr内元素依次放入链表
        list.next = new ListNode(arr.shift());
        list = list.next;
    }
    list.next = null;
    return head;
};