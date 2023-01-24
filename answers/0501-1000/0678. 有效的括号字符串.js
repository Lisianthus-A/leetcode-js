/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
    const asterisk = [];  //星号
    const l = [];  //左括号
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (char === '(') {
            l.push(i);
        } else if (char === '*') {
            asterisk.push(i);
        } else {
            if (l.length > 0) {
                l.pop();
            } else if (asterisk.length > 0) {
                asterisk.shift();
            } else {
                return false;
            }
        }
    }

    if (l.length > asterisk.length) {
        return false;
    }

    //剩余左括号与星号匹配
    while (l.length) {
        const index = l.pop();
        const asteriskIndex = asterisk.findIndex(value => value > index);
        if (asteriskIndex !== -1) {
            asterisk.splice(asteriskIndex, 1)
        } else {
            return false;
        }
    }

    return true;
};