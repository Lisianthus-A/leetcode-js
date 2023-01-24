function readBinaryWatch(num: number): string[] {
    const times = [1, 2, 4, 8, 1, 2, 4, 8, 16, 32];

    const helper = (hours: Array<number> = [], mins: Array<number> = [], idx: number = 0): void => {
        if (hours.length + mins.length >= num) {  //已拾取足够 hour, min
            calculateTime(hours, mins);
            return;
        }
        if (idx >= 10) {  //越界
            return;
        }

        //拾取 hour, min
        idx <= 3 ? helper([...hours, times[idx]], mins, idx + 1) : helper(hours, [...mins, times[idx]], idx + 1);
        helper(hours, mins, idx + 1);
    }

    const calculateTime = (hours: Array<number>, mins: Array<number>): void => {
        const hour = hours.reduce((prev, curr) => prev + curr, 0);  //小时
        const min = mins.reduce((prev, curr) => prev + curr, 0);  //分钟

        //无效数据
        if (hour >= 12 || min >= 60) {
            return;
        }

        res.push(`${hour}:${min <= 9 ? 0 : ''}${min}`);
    }

    const res = [];
    helper();
    return res;
};