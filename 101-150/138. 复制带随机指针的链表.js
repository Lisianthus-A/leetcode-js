/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    //空链表
    if (head === null) {
        return null;
    }

    let nodes = [];
    //遍历链表，存入nodes数组
    while (head) {
        nodes.push(head);
        head = head.next;
    }

    //复制链表
    let copyNodes = [];
    for (let i = 0; i < nodes.length; i++) {
        let node = new Node(nodes[i].val);
        let randomIndex = nodes.indexOf(nodes[i].random);
        node.random = randomIndex;
        copyNodes.push(node);
    }
    //处理复制链表的next和random
    for (let i = 0; i < copyNodes.length; i++) {
        copyNodes[i].next = copyNodes[i + 1] ? copyNodes[i + 1] : null;
        copyNodes[i].random = copyNodes[i].random === -1 ? null : copyNodes[copyNodes[i].random];
    }

    return copyNodes[0];
};