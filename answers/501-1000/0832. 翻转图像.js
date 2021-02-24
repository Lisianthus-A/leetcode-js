/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
    return A.map(arr => arr.map(item => item ? 0 : 1)).map(arr => arr.reverse());
};