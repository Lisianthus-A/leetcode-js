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
var deleteDuplicates = function(head) {
    if (head === null) {
        return null;
    }
    let p = head.next;
    let prev = head;
    let deleteNode = [];  //需要删除的节点
    while (p) {
        if (p.val === prev.val) {  //重复
            if (deleteNode.indexOf(prev) === -1) {
                deleteNode.push(prev);
            }
            deleteNode.push(p);
        } 
        prev = p;
        p = p.next;
    }
    //删除节点
    let h = head;
    while (h === deleteNode[0]) {
        h = h.next;
        deleteNode.shift();
    }
    if (h === null) {
        return null;
    }
    prev = h;
    p = h.next;
    while (deleteNode.length) {
        if (p === deleteNode[0]) {
            prev.next = p.next;
            deleteNode.shift();
        } else {
            prev = p;
        }
        p = p.next;
    }
    return h;
};