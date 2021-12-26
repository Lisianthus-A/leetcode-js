// 不使用 split 分割字符串
// 一次遍历
function findOcurrences(text: string, first: string, second: string): string[] {
    const res = [];

    let startIndex = 0;
    let firstWord = '',
        secondWord = '';
    for (let i = 0; i < text.length; ++i) {
        if (text[i] === ' ') {
            const word = text.slice(startIndex, i);
            startIndex = i + 1;
            if (firstWord === first && secondWord === second) {
                res.push(word);
            }
            firstWord = secondWord;
            secondWord = word;
        }
    }

    const lastWord = text.slice(startIndex, text.length);
    if (firstWord === first && secondWord === second) {
        res.push(lastWord);
    }

    return res;
};