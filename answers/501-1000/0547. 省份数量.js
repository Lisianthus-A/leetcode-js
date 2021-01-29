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
            if (this.parents[x] !== x) {
                return this.find(this.parents[x]);
            }

            return x;
        }
    }

    const uf = new UnionFind(isConnected.length);

    for (let i = 0; i < isConnected.length; i++) {
        for (let j = 0; j < isConnected[i].length; j++) {
            if (i === j) {
                continue;
            }
            if (isConnected[i][j]) {
                uf.union(i, j);
            }
        }
    }

    return uf.count;
};