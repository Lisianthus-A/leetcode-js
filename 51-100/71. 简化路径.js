/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
    let arr = path.match(/[/][0-9a-zA-Z._]+/g);
    let stack = [];
    if (arr) {
        for (let i of arr) {
            switch (i) {
                case '/..':
                    stack.pop();
                    break;
                case '/.':
                    break;
                default:
                    stack.push(i);
            }
        }
    }
    if (!stack.length) {
        return '/';
    }
    return stack.join('');
};