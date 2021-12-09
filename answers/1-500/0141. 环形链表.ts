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

// 快慢指针
// fast 每次移动两个节点
// slow 每次移动一个节点
// 如果存在环，则 fast 与 slow 会相遇
function hasCycle(head: ListNode | null): boolean {
  if (head === null) {
      return false;
  }

  let slow = head,
      fast = head.next;

  while (fast !== null && slow !== null) {
      if (fast === slow) {
          return true;
      }

      slow = slow.next;
      fast = fast.next ? fast.next.next : null;
  }

  return false;
};