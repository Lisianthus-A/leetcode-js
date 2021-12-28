// 判断 word 是否符合要求
const isValid = (word: string, wordMap: Record<string, boolean>, isSplit: boolean, memo: Record<string, boolean>) => {
    if (wordMap[word] && isSplit) {
        return true;
    }

    // 从后往前分割字符串
    for (let i = word.length - 1; i > 0; --i) {
        const splitWord = word.slice(0, i);
        // 字符串前缀已经符合要求
        // 判断后面部分是否符合要求即可
        if (memo[splitWord] === true) {
            return isValid(word.slice(i), wordMap, true, memo);
        }

        if (wordMap[splitWord] === true) {
            if (isValid(word.slice(i), wordMap, true, memo)) {
                return true;
            }
        }
    }

    return false;
}

function findAllConcatenatedWordsInADict(words: string[]): string[] {
    const memo: Record<string, boolean> = {};
    const wordMap: Record<string, boolean> = words.reduce((acc, cur) => {
        acc[cur] = true;
        return acc;
    }, {});

    const res = [];
    for (let i = 0; i < words.length; ++i) {
        const word = words[i];
        if (isValid(word, wordMap, false, memo)) {
            res.push(word);
            // 保存此 word 是否符合要求
            // 用来给 isValid 切割出的前缀做判断
            memo[word] = true;
        }
    }

    return res;
};