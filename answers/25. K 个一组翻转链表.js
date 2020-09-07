/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
    let arr = [];
    let prev = null;  //上一个节点
    let h = null;  //翻转链表后的头
    while (head) {
        arr.push(head);
        if (arr.length === k) {  //数组已经有k个节点，开始翻转
            head = head.next;
            arr.reverse();

            if (!h) {  //取得翻转链表后的头
                h = arr[0];
            }

            for (let i = 0; i < k - 1; i++) {  //设置链表节点指向
                arr[i].next = arr[i + 1];
            }

            //上一个节点的next指向翻转后的链表首节点
            if (prev) {  
                prev.next = arr[0];
            }
            prev = arr[k - 1];
            arr = [];
            continue;
        }

        head = head.next;
    }

    if (arr.length > 0) {  //由于链表长度不是k的整数倍，数组内还有节点
        for (let i of arr) {
            prev.next = i;
            prev = i;
        }
    }
    
    prev.next = null;

    return h;
};