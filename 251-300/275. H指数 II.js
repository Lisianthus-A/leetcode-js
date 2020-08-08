/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
    let len = citations.length;
    for (let i = len - 1; i >= 0; i--) {
        let temp = len - i - 1;
        if (citations[i] <= temp) {
            return temp;
        }
    }
    return len;
};