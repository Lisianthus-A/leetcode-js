/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const foo = (s) => {
        let arr = [];
        let temp = [];
        for (let i of s.split('')) {
            let idx = temp.indexOf(i);
            if (idx === -1) {
                temp.push(i);
                idx = temp.indexOf(i);
            }
            arr.push(idx);
        }
        return arr.join('');
    }
    return foo(s) === foo(t);
};