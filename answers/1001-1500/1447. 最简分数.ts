// 记忆之前的结果
const memo = {
  '1': [],
  max: 1
};

// 判断分子分母是否有公约数
const hasCommonDivisor = (num1: number, num2: number) => {
  const half = num2 >> 1;
  for (let i = 2; i <= num1 && i <= half; ++i) {
      if (num1 % i === 0 && num2 % i === 0) {
          return true;
      }
  }

  return false;
}

function simplifiedFractions(n: number): string[] {
  if (memo.max >= n) {
      return memo[n];
  }

  // 获取最近的记忆结果
  const res = memo[memo.max].slice();
  // i 为分母 j 为分子，依次判断是否有公约数
  // 如果没有公约数则是最简分数
  for (let i = memo.max + 1; i <= n; ++i) {
      for (let j = 1; j < i; ++j) {
          if (!hasCommonDivisor(j, i)) {
              res.push(`${j}/${i}`);
          }
      }

      // 保存结果
      memo[i] = res.slice();
      memo.max = Math.max(memo.max, i);
  }

  return res;
};