/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    let min = Infinity;
    let result = [];
    for (let i = 0; i < list1.length; i++) {
        const idx = list2.indexOf(list1[i]);
        if (~idx) {
            const sum = idx + i;
            if (sum < min) {
                min = sum;
                result = [list1[i]];
            } else if (sum === min) {
                result.push(list1[i]);
            }
        }
    }

    return result;
};