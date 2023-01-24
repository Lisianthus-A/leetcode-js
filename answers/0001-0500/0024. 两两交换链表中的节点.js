/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    let len = 0;  //链表长
    let p = head;
    while(p) {  //得到链表长度
        len++;
        p = p.next;
    }
    if (len === 0 || len === 1) {  //表长为0或1，返回自身
        return head;
    }
    let res = head.next;  //交换后的表头
    p = head;
    if (len % 2 === 0) {  //长度为偶数
        for (let i = 0; i < len / 2; i++) {
            let prev = p;  //要交换的节点的上一个节点
            let latt = p.next;  //下一个节点
            let temp = latt.next;
            if (temp) {
                prev.next = temp.next;
                latt.next = prev;
            } else {  //temp为null
                prev.next = null;
                latt.next = prev;
                break;
            }
            p = temp;
        }
    } else {
        for (let i = 0; i < (len - 1) / 2; i++) { //长度为奇数
            let prev = p;
            let latt = p.next;
            let temp = latt.next;
            if (temp.next) {
                prev.next = temp.next;
            } else {
                prev.next = temp;
            }
            latt.next = prev;
            p = temp;
        }
    }
    return res;
};