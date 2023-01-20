function findingUsersActiveMinutes(logs: number[][], k: number): number[] {
    const res = new Array(k).fill(0);
    // { userId: { [time]: 0; count: number; } }
    const map: Record<string, any> = {};
    for (let i = 0; i < logs.length; ++i) {
        const [id, time] = logs[i];
        if (!map[id]) {
            map[id] = { count: 0 };
        }

        const item = map[id];
        if (item[time] !== 0) {
            item[time] = 0;
            res[item.count - 1] -= 1;
            res[item.count++] += 1;
        }
    }
    delete res['-1'];
    return res;
};