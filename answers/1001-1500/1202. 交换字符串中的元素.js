/**
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
 */
var smallestStringWithSwaps = function (s, pairs) {
    const parents = new Array(s.length).fill(0).map((_, index) => index);
    const childs = parents.map(value => [value]);

    const union = (a, b) => {
        const rootA = find(a);
        const rootB = find(b);
        if (rootA !== rootB) {
            parents[rootB] = rootA;
            for (const child of childs[rootB]) {
                parents[child] = rootA;
                childs[rootA].push(child);
            }
            childs[rootB] = [];
        }
    }

    const find = (a) => {
        let root = parents[a];
        let val = a;
        while (root !== val) {
            const temp = val;
            val = root;
            root = parents[root];
        }

        //压缩路径
        while (parents[a] !== root) {
            const temp = a;
            a = parents[parents[a]];
            parents[temp] = root;
            for (const child of childs[temp]) {
                parents[child] = rootA;
                childs[rootA].push(child);
            }
            childs[temp] = [];
        }

        return root;
    }

    for (const [a, b] of pairs) {
        union(a, b);
    }

    const chars = [];
    for (let i = 0; i < s.length; i++) {
        const parent = parents[i];
        if (chars[parent]) {
            chars[parent].push(s[i]);
        } else {
            chars[parent] = [s[i]];
        }
    }

    for (const charArr of chars) {
        charArr && charArr.sort();
    }

    for (let i = parents.length - 1; i >= 0; i--) {
        const parent = parents[i];
        parents[i] = chars[parent].pop();
    }

    return parents.join('');
};