/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
//排列好的字符串可以认为是由若干个基本形状组成
//可以观察形状之间的规律，得出变换后字符的对应关系
var convert = function (s, numRows) {
    if (s === "" || numRows === 1) {
        return s;
    }
    let len = s.length;
    let dist = 2 * numRows - 2;  //每两个基本形状之间的距离
    let numPerLine = [];  //组成所有形状后，每行的字符数
    let str = '';
    for (let i = 0; i < numRows; i++) {
        if (len % dist === 0) {  //组成所有形状后，没有剩余字符
            if (i === 0 || i === numRows - 1) {
                numPerLine.push(len / dist);
            } else {
                numPerLine.push(len / dist * 2);
            }
        } else {
            if (i === 0 || i === numRows - 1) {
                numPerLine.push(parseInt(len / dist));
                if (len % dist > i) {
                    numPerLine[i]++;
                }
            } else {
                numPerLine.push(parseInt(len / dist) * 2);
                if (len % dist > i) {
                    numPerLine[i]++;
                }
                if (len % dist - numRows >= numRows - 1 - i) {
                    numPerLine[i]++;
                }
            }
        }
    }
    for (let i = 0; i < numPerLine.length; i++) {  //根据每行的字符数，逐一将对应的字符加进str
        let tmp = 0;
        while (numPerLine[i]--) {
            if (i === 0 || i === numRows - 1) {
                str += s[i + tmp * dist];
            } else {
                if (tmp % 2 === 0) {
                    str += s[i + tmp / 2 * dist];
                } else {
                    str += s[i + parseInt(tmp / 2) * dist + (numRows - 1 - i) * 2];
                }
            }
            tmp++;
        }
    }
    return str;
};