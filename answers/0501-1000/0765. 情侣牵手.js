/**
 * @param {number[]} row
 * @return {number}
 */
var minSwapsCouples = function (row) {
    const parents = new Array(row.length).fill(0).map((_, index) => index);
    let count = row.length;
    const union = (a, b) => {
        const rootA = find(a);
        const rootB = find(b);
        if (rootA !== rootB) {
            parents[rootA] = rootB;
            count--;
        }
    }

    const find = (val) => {
        let root = val;
        while (parents[root] !== root) {
            root = parents[root];
        }

        //压缩路径
        while (parents[val] !== root) {
            const temp = val;
            val = parents[val];
            parents[temp] = root;
        }

        return root;
    }

    for (let i = 0; i < row.length; i += 2) {
        union(i, i + 1);
        union(row[i], row[i + 1]);
    }

    return row.length / 2 - count;
};