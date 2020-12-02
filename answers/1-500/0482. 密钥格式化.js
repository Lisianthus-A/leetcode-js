/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var licenseKeyFormatting = function (S, K) {
    let match = S.match(/\w/g);
    if (K > S.length && match) {
        return S;
    }
    if (!match) {
        return '';
    }
    const len = match.length;
    let num = len % K;
    let res = '';
    while (num--) {
        res += match.shift();
    }
    if (len % K !== 0) {
        res += '-';
    }
    match = match.join('').match(new RegExp(`\\w{${K}}`, 'g'));
    return (res + match.join('-')).toUpperCase();
};