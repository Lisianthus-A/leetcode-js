function alertNames(keyName: string[], keyTime: string[]): string[] {
    const mapNameToTimes: Map<string, number[]> = new Map();
    for (let i = 0; i < keyName.length; ++i) {
        const name = keyName[i];
        const [h, m] = keyTime[i].split(":");
        const mins = Number(h) * 60 + Number(m);
        if (!mapNameToTimes.has(name)) {
            mapNameToTimes.set(name, [mins]);
            continue;
        }

        binarySearchInsert(mins, mapNameToTimes.get(name));
    }

    const res: string[] = [];
    mapNameToTimes.forEach((times, name) => {
        for (let i = 0; i + 2 < times.length; ++i) {
            const t0 = times[i];
            const t1 = times[i + 2];
            if (t1 - t0 <= 60) {
                binarySearchInsert(name, res);
                break;
            }
        }
    });
    return res;
};

function binarySearchInsert(value: number | string, array: (typeof value)[]) {
    if (value >= array[array.length - 1]) {
        array.push(value);
        return;
    }

    let left = 0, right = array.length - 1;
    while (left <= right) {
        const mid = left + right >> 1;
        const v = array[mid];
        if (v === value) {
            left = mid;
            break;
        }

        if (v > value) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    array.splice(left, 0, value);
}