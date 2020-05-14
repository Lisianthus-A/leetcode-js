/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    let tArray = t.split('');
    let len = t.length;
    //判断str是否包含T所有字符
    const foo = (str) => {
        let arr = str.split('');
        for (let i of tArray) {
            let idx = arr.indexOf(i);
            if (idx !== -1) {
                arr.splice(idx, 1);
            } else {
                return false;
            }
        }
        return true;
    }
    if (foo(s)) {
        for (let i = len; i < s.length; i++) {
            for (let j = 0; j < s.length - i + 1; j++) {
                let str = s.slice(j, j + i);
                if (foo(str)) {
                    return str;
                }
            }

        }
        return s;
    }
    return '';
};