/**
 * @param {string[]} words
 * @param {string[]} puzzles
 * @return {number[]}
 */
var findNumOfValidWords = function (words, puzzles) {
    //最后一个测试用例超时
    
    const wordArray = words.map(word => {
        const o = {};
        for (const char of word) {
            o[char] = true;
        }
        return o;
    });

    const puzzleArray = puzzles.map(puzzle => {
        const o = {};
        for (const char of puzzle) {
            o[char] = true;
        }
        o.first = puzzle[0];
        return o;
    });

    return puzzleArray.map(puzzleObj => {
        let sum = 0;
        const firstChar = puzzleObj.first;
        for (const wordObj of wordArray) {
            wordObj[firstChar] && Object.keys(wordObj).every(char => puzzleObj[char]) && sum++;
        }

        return sum;
    });
};