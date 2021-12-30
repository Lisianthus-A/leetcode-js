// 二分查找
const binarySearch = (array: number[], value: number): number => {
    let left = 0, right = array.length - 1;
    while (left <= right) {
        const mid = left + right >> 1;
        if (array[mid] === value) {
            return mid;
        }

        if (array[mid] > value) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return left;
}


function isNStraightHand(hand: number[], groupSize: number): boolean {
    if (hand.length % groupSize !== 0) {
        return false;
    }

    // 去重、排序后的数组
    const sortedArray = [];
    // 记录数字出现次数
    const counts = {};

    // 数组去重排序、记录数字出现次数
    for (let i = 0; i < hand.length; ++i) {
        const num = hand[i];
        if (counts[num] === undefined) {
            const lastItem = sortedArray[sortedArray.length - 1];
            // 1. number < undefined  --> false
            // 2. num1 < lastNum
            if (num < lastItem) {
                const indexToInsert = binarySearch(sortedArray, num);
                sortedArray.splice(indexToInsert, 0, num);
            } else {
                sortedArray.push(num);
            }
            counts[num] = 1;
        } else {
            ++counts[num];
        }
    }

    // 按数字大小顺序进行模拟重新排列分组
    for (let i = 0; i <= sortedArray.length - groupSize; ++i) {
        const num = sortedArray[i];
        while (counts[num] !== 0) {
            --counts[num];
            for (let j = 1; j < groupSize; ++j) {
                const currNum = num + j;
                if (counts[currNum] === undefined || counts[currNum] < 1) {
                    return false;
                }

                --counts[currNum];
            }
        }
    }

    // 排列完毕，还有剩余卡牌，返回 false
    for (const num in counts) {
        if (counts[num] !== 0) {
            return false;
        }
    }

    return true;
};