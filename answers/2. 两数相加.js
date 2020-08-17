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
var addTwoNumbers = function (l1, l2) {
    let arr1 = [];  //存放l1 val值的数组
    let arr2 = [];  //存放l2 val值的数组
    let list = new ListNode();
    let head = list;  //返回的链表头
    while(1) {  //将l1和l2的val值存入数组
        if (l1 !== null) {
            arr1.push(l1.val);
            l1 = l1.next;
        }
        if (l2 !== null) {
            arr2.push(l2.val);
            l2 = l2.next;
        }
        if (l1 ===null && l2 ===null)  break;
    }
    let arr = [];
    //将arr1和arr2里的元素相加，存入arr
    for (let i = 0; arr1[0] !== undefined || arr2[0] !==undefined; i++) {
        if (arr1[0] === undefined) {
            arr.push(arr2.shift());
            continue;
        }
        else if (arr2[0] === undefined) {
            arr.push(arr1.shift());
            continue;
        }
        arr.push(arr1.shift() + arr2.shift());
    }
    //将arr值超过10的元素进行处理，超过10则后一个元素进一位
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 10 && arr[i + 1] !== undefined) {
            arr[i] -= 10;
            arr[i + 1]++;
        }
        else if (arr[i] >= 10 && arr[i + 1] === undefined) {
            arr[i] -= 10;
            arr.push(1);
            break;
        }
    }
    //let arr = (parseInt(arr1.join('')) + parseInt(arr2.join(''))).toString().split('').reverse().map((elem) => parseInt(elem));
    //上面注释的代码可在输出结果小于21位的情况下使用，因为超过21位后，js计算结果为科学计数法，通过字符串转成数组不能正常运行
    //将arr的结果存入链表
    for (let i in arr) {
        if (i != 0) {
            list.next = new ListNode(arr[i]);
            list = list.next;
        }
        else {
            list.val = arr[i];
        }
    }
    return head;
};