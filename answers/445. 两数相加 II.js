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
var addTwoNumbers = function(l1, l2) {
    //获取两链表的val
    const stack1 = [];
    const stack2 = [];
    while (l1) {
        stack1.push(l1.val);
        l1 = l1.next;
    }
    while (l2) {
        stack2.push(l2.val);
        l2 = l2.next;
    }

    //相加，结果存入arr
    const arr = [];
    let carry = 0;  //进位
    while (stack1.length || stack2.length || carry) {
        const result = (stack1.pop() || 0) + (stack2.pop()  || 0) + carry;
        if (result >= 10) {
            arr.push(result - 10);
            carry = 1;
        } else {
            arr.push(result);
            carry = 0;
        }
    }

    //根据arr构造新链表
    const h = new ListNode(arr.pop());
    let node = h;
    while (arr.length) {
        node.next = new ListNode(arr.pop());
        node = node.next;
    }
    node.next = null;

    return h;
};