function frequencySort(s: string): string {
    // 统计字符出现次数
    const counts: Record<string, number> = {};
    for (let i = 0, len = s.length; i < len; ++i) {
        const char = s[i];
        counts[char] = counts[char] + 1 || 1;
    }

    // 二分法排序
    const array: Array<string> = [];
    const find = (char: string): number => {
        let left = 0, right = array.length - 1;
        const count = counts[char];
        while (left <= right) {
            const mid = left + right >> 0;
            const midChar = array[mid];
            if (count === counts[midChar]) {
                return mid;
            }

            if (count > counts[midChar]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        return left;
    }

    // 按字符出现次数组成降序数组
    for (let char in counts) {
        const count = counts[char];
        const lastChar = array[array.length - 1];
        if (counts[lastChar] >= count) {
            array.push(char);
        } else {
            const index = find(char);
            array.splice(index, 0, char);
        }
    }

    return array.reduce((acc, cur) => acc + cur.repeat(counts[cur]), '');
};