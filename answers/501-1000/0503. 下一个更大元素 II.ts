const loopSearch = (value, index, array) => {
    for (let i = (index + 1) % array.length; i !== index; i = (i + 1) % array.length) {
        if (array[i] > value) {
            return array[i];
        }
    }
    return -1;
}

function nextGreaterElements(nums: number[]): number[] {
    return nums.map(loopSearch);
};