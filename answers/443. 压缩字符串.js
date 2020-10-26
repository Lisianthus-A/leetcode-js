/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
    for (let i = 0; i < chars.length; i++) {
        let idx = i + 1;  //将要判断的字符下标
        let count = 1;  //字符chars[i]出现的次数

        //统计chars[i]出现的次数
        while (idx < chars.length) {
            if (chars[idx++] === chars[i]) {
                count++;
            } else {
                break;
            }
        }

        if (count > 1) {
            //将所有与chars[i]相同的字符去掉
            while (chars[i + 1] === chars[i]) {
                chars.splice(i + 1, 1);
            }
            //插入count
            count = count.toString().split('');
            chars.splice(i + 1, 0, ...count);

            //跳过插入的count数字字符
            i += count.length;
        }
    }
    return chars.length;
};