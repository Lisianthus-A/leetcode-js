/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    const swap = (arr, i, j) => {  //交换位置
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    const isVowel = char => /[aiueo]/i.test(char);  //是否元音

    let left = 0;
    let right = s.length - 1;
    const sArr = s.split('');

    while (left < right) {
        if (isVowel(s[left]) && isVowel(s[right])) {  //交换元音
            swap(sArr, left++, right--);
        }
        if (!isVowel(s[left])) {  //left非元音
            left++;
        }
        if (!isVowel(s[right])) {  //right非元音
            right--;
        }
    }

    return sArr.join('')
};