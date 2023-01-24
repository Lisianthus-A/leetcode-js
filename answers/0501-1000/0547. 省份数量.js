/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
    class UnionFind {
        constructor(length) {
            this.parents = new Array(length).fill(0).map((_, index) => index);
            this.count = length;
        }

        union(x, y) {
            const rootX = this.find(x);
            const rootY = this.find(y);
            if (rootX !== rootY) {
                this.parents[rootX] = rootY;
                this.count--;
            }
        }

        find(x) {
            let root = x;
            while (this.parents[root] !== root) {
                root = this.parents[root];
            }

            while (this.parents[x] !== root) {  //压缩路径
                const temp = x;
                x = this.parents[x];
                this.parents[temp] = root;
            }

            return root;
        }
    }

    const uf = new UnionFind(isConnected.length);

    for (let i = 0; i < isConnected.length; i++) {
        for (let j = i + 1; j < isConnected[i].length; j++) {
            if (isConnected[i][j]) {
                uf.union(i, j);
            }
        }
    }

    return uf.count;
};