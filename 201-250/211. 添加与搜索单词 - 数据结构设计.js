/**
 * Initialize your data structure here.
 */
var WordDictionary = function () {
    this.words = {

    };
};

/**
 * Adds a word into the data structure. 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
    //根据字符串长度分开word
    if (this.words[word.length] === undefined) {
        this.words[word.length] = new Set();
    }

    this.words[word.length].add(word);
};

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter. 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
    if (this.words[word.length]) {
        let regex = new RegExp(word);
        return !!Array.from(this.words[word.length]).find(e => regex.test(e));
    }
    return false;
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */