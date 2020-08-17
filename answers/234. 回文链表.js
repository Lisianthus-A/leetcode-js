/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let values = [];
    while (head) {
        values.push(head.val);
        head = head.next;
    }
    return values.join('') === values.reverse().join('');
};