/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
    const res = [];
    people.sort((a, b) => b[0] - a[0]);
    while (people.length) {
        let idx = 0;
        for (let i = 1; i < people.length; i++) {
            const [h, k] = people[i];
            //身高相同但k更小
            if (h === people[idx][0] && k < people[idx][1]) {
                idx = i;
                continue;
            }
            //身高已经不相同了
            if (h !== people[idx][0]) {
                break;
            }
        }

        //根据k值插入到队列中
        const person = people.splice(idx, 1)[0];
        res.splice(person[1], 0, person);
    }
    return res;
};
