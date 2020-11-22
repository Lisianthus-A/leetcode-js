/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    return s.trim() ? s.trim().match(/\s+/g)?.length + 1 || 1 : 0;
};