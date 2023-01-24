interface Item {
    num: number;
    score: number;
}

// 二分查找
// --> [index, isMatch]
const binarySearch = (array: Item[], value: number): [number, boolean] => {
    let left = 0, right = array.length - 1;
    while (left <= right) {
        const mid = left + right >> 1;
        if (array[mid].num === value) {
            return [mid, true];
        }

        if (array[mid].num > value) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return [left, false];
}

function deleteAndEarn(nums: number[]): number {
    if (nums.length === 1) {
        return nums[0];
    }

    // 构造一个 num 递增数组
    const items = [{ num: nums[0], score: nums[0] }];
    for (let i = 1; i < nums.length; ++i) {
        const num = nums[i];
        const lastItem = items[items.length - 1];
        if (num > lastItem.num) {
            items.push({
                num,
                score: num
            });
            continue;
        }

        const [index, isMatch] = binarySearch(items, num);
        if (isMatch) {
            items[index].score += num;
        } else {
            items.splice(index, 0, {
                num,
                score: num
            });
        }
    }

    // p 和 q 分别是上一次的最优选择和当前的最优选择
    let p = items[0], q = items[1];
    if (p.num + 1 !== q.num) {
        q.score += p.score;
    }
    if (q.score <= p.score) {
        q = { ...p };
    }

    // 动态规划出下一个最优选择
    // 然后 p 和 q 移位
    for (let i = 2; i < items.length; ++i) {
        const next = { ...q };
        const { num, score } = items[i];

        if (q.num + 1 === items[i].num) {
            if (p.score + score > q.score) {
                next.num = num;
                next.score = p.score + score;
            }
        } else {
            next.num = num;
            next.score = q.score + score;
        }

        p = q;
        q = next;
    }

    return Math.max(p.score, q.score);
};