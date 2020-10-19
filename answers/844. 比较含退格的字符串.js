/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
    const getString = (str) => {
        const stack = [];
        for (const char of str) {
            if (char === '#') {
                stack.pop();
            } else {
                stack.push(char);
            }
        }
        return stack.join('');
    }
    return getString(S) === getString(T);
};