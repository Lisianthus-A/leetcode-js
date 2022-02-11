const fastSort = (array: number[]): number[] => {
  if (array.length <= 1){
      return array;
  }

  const pivot = array.pop();
  const left = [], right = [];
  for (let i = 0; i < array.length; ++i) {
      if (array[i] > pivot) {
          right.push(array[i]);
      } else {
          left.push(array[i]);
      }
  }

  return [...fastSort(left), pivot, ...fastSort(right)];
}

function minimumDifference(nums: number[], k: number): number {
  if (k === 1) {
      return 0;
  }
  const array = fastSort(nums);
  let min = Infinity;
  for (let i = 0; i < array.length; ++i) {
      if (i + k - 1 >= array.length) {
          break;
      }
      min = Math.min(min, array[i + k - 1] - array[i]);
  }

  return min;
};