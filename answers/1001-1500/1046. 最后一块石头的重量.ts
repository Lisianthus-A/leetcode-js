function lastStoneWeight(stones: number[]): number {
    stones.sort((a, b) => a - b);

    const insert = (value: number): void => {
        if (!value) {  //0
            return;
        }

        for (let i = 0; i < stones.length; i++) {
            if (stones[i] >= value) {
                stones.splice(i, 0, value);
                return;
            }
        }
        
        stones.push(value);
    }

    while (stones.length > 1) {
        insert(stones.pop() - stones.pop());
    }
    return stones.pop() || 0;
};