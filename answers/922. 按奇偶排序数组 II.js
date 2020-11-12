/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
    const odd = [];
    const even = [];
    for (const num of A) {
        num % 2 ? odd.push(num) : even.push(num);
    }
    A = [];
    for (let i = 0; i < odd.length; i++) {
        A.push(even[i], odd[i]);
    }
    
    return A;
};