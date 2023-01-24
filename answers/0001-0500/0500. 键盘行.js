/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    const arr = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm']
    return words.filter(word => {
        const regex = new RegExp(word[0].toLowerCase());
        let line = regex.test(arr[0]) ? 0 : regex.test(arr[1]) ? 1 : 2;
        for (const char of word) {
            if (!arr[line].includes(char.toLowerCase())) {
                return false;
            }
        }
        return true;
    });
};