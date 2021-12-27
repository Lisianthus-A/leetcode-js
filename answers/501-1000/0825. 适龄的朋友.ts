interface AgeObj {
  age: number;
  count: number;
}

const binarySearch = (array: AgeObj[], age: number): [number, boolean] => {
  let left = 0, right = array.length - 1;
  while (left <= right) {
      const mid = left + right >> 1;
      if (array[mid].age === age) {
          return [mid, true];
      }

      if (array[mid].age > age) {
          right = mid - 1;
      } else {
          left = mid + 1;
      }
  }

  return [left, false];
}


function numFriendRequests(ages: number[]): number {
  const ageArray: AgeObj[] = [];
  for (let i = 0; i < ages.length; ++i) {
      const age = ages[i];
      const lastItem = ageArray.slice(-1)[0];
      if (lastItem && age > lastItem.age) {
          ageArray.push({ age, count: 1 });
          continue;
      }

      const [index, isMatch] = binarySearch(ageArray, age);
      if (isMatch) {
          ++ageArray[index].count;
      } else {
          ageArray.splice(index, 0, { age, count: 1 });
      }
  }

  let res = 0;
  for (let i = 0; i < ageArray.length; ++i) {
      const { count, age } = ageArray[i];
      const minAge = (age >> 1) + 8;
      // 同年龄互发请求
      if (age >= minAge) {
          res += count * (count - 1);
      }
      // 向更年轻的人发请求
      const [index, _] = binarySearch(ageArray, minAge);
      for (let j = index; j < i; ++j) {
          res += ageArray[j].count * count;
      }
  }

  return res;
};