function findRightInterval(intervals: number[][]): number[] {
    //根据起始点排序后的数组
    const sortArray = intervals.slice().sort(([a], [b]) => a - b);

    return intervals.map(v1 => intervals.indexOf(sortArray.find(v2 => v2[0] >= v1[1])));
};