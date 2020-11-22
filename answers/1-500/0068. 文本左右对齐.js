/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    let res = [];
    let arr = [];
    while (words.length) {
        //arr内单词补空格后的总长度 + 下个单词的长度小于等于maxWidth
        while (words.length 
        && arr.reduce((acc, cur) => acc + cur.length + 1, 0) + words[0].length <= maxWidth) {
            arr.push(words.shift());
        }
        //需要补的空格数
        let diff = maxWidth - arr.reduce((acc, cur) => acc + cur.length, 0);
        if (words.length) {  //不是最后一行
            //开始补空格
            while (diff) {
                if (arr.length === 1) {
                    arr[0] += ' ';
                    diff--;
                } else {
                    for (let i = 0; i < arr.length - 1; i++) {
                        arr[i] += ' ';
                        diff--;
                        if (!diff) {
                            break;
                        }
                    }
                }
            }
            res.push(arr.join(''));
        } else {  //最后一行
            let str = arr.join(' ');
            while (str.length !== maxWidth) {
                str += ' ';
            }
            res.push(str);
        }
        arr = [];
    }
    return res;
};