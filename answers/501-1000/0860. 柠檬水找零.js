/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
    const obj = {
        5: 0,
        10: 0
    };

    for (const num of bills) {
        if (num === 5) {
            obj[5]++;
        } else if (num === 10) {
            if (obj[5] > 0) {
                obj[5]--;
                obj[10]++;
            } else {
                return false;
            }
        } else {  //20
            if (obj[10] > 0 && obj[5] > 0) {
                obj[10]--;
                obj[5]--;
            } else if (obj[5] >= 3) {
                obj[5] -= 3;
            } else {
                return false;
            }
        }
    }

    return true;
};