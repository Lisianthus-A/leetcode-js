/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} X
 * @return {number}
 */
var maxSatisfied = function (customers, grumpy, X) {
    let base = 0;  //不生气时来的客户数
    let extra = 0;  //使用秘密技巧后能满意的客户
    for (let i = 0; i < grumpy.length; i++) {
        let x = X;
        if (grumpy[i]) {  //生气，开始计算此时如果使用秘密技巧，能满意的客户
            let sum = 0;
            for (let j = i; j < grumpy.length && x--; j++) {
                if (grumpy[j]) {
                    sum += customers[j]
                }
            }
            extra = Math.max(sum, extra);
        } else {  //不生气，基础满意客户直接加上 customers[i]
            base += customers[i];
        }
    }

    return base + extra;
};