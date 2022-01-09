function slowestKey(releaseTimes: number[], keysPressed: string): string {
    let startTime = releaseTimes[0];
    let maxTime = releaseTimes[0];
    let maxTimeChar = keysPressed[0];
    for (let i = 1; i < releaseTimes.length; ++i) {
        const time = releaseTimes[i] - startTime;
        if (time > maxTime) {
            maxTime = time;
            maxTimeChar = keysPressed[i];
        } else if (time === maxTime) {
            maxTimeChar = maxTimeChar > keysPressed[i] ? maxTimeChar : keysPressed[i];
        }

        startTime = releaseTimes[i];
    }

    return maxTimeChar;
};