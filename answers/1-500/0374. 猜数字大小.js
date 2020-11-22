/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let left = 1;
    let right = n;
    while (left + 1 < right) {
        let mid = parseInt((left + right) / 2);
        let res = guess(mid);
        if (res === -1) {
            right = mid;
        } else if (res === 1) {
            left = mid;
        } else if (res === 0) {
            return mid;
        }
    }
    if (guess(left)) {
        return right;
    }
    return left;
};