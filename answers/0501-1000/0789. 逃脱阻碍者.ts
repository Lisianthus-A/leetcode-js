// 计算两点距离
function calcDistance(p1: number[], p2: number[]): number {
    const [a, b] = p1;
    const [c, d] = p2;
    return Math.abs(a - c) + Math.abs(b - d);
}

function escapeGhosts(ghosts: number[][], target: number[]): boolean {
    const distance = calcDistance([0, 0], target);

    // 判断是否有 ghost 距目的地更短
    return ghosts.every(point => calcDistance(point, target) > distance);
};