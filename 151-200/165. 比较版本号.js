/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    let v1 = version1.match(/\d+/g);
    let v2 = version2.match(/\d+/g);

    let len = Math.max(v1.length, v2.length);
    for (let i = 0; i < len; i++) {
        let n1 = v1[i] !== undefined ? +v1[i] : 0;
        let n2 = v2[i] !== undefined ? +v2[i] : 0;
        console.log(n1);
        console.log(n2);
        if (n1 > n2) {
            return 1;
        } else if (n1 < n2) {
            return -1;
        }
    }

    return 0;
};