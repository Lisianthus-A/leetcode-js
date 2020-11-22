/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    let a = 0;
    let b = 0;
    secret = secret.split('');
    guess = guess.split('');
    for (let i = 0; i < guess.length; i++) {
        if (guess[i] === secret[i] && ++a) {
            secret[i] = 'A';
            guess[i] = 'a';
        }
    }
    for (let i of guess) {
        let idx = secret.indexOf(i);
        if (!!~idx && ++b) {
            secret[idx] = 'B';
        }
    }
    return `${a}A${b}B`;
};