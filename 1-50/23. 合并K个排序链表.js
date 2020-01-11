/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    let arr = [];
    //将lists内链表所有的val值存入arr
    for (let i in lists) {
        while(lists[i]) {
            arr.push(lists[i].val);
            lists[i] = lists[i].next;
        }
    }
    if (!arr.length) {  //arr为空，说明lists内链表为null或无链表
        return null;
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