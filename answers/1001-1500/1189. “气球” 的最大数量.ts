/*
{
    a: 1,
    b: 1,
    l: 2,
    n: 1,
    o: 2
}
*/

function maxNumberOfBalloons(text: string): number {
    // @ts-ignore
    const counts: Record<string, number> = Array.prototype.reduce.call(text, (acc, cur) => {
        acc[cur] = acc[cur] + 1 || 1;
        return acc;
    }, {});

    return Math.min(
        counts.a,
        counts.b,
        counts.l / 2 >> 0,
        counts.n,
        counts.o / 2 >> 0
    ) || 0;
};