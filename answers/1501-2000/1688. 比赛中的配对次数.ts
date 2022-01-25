function numberOfMatches(n: number, cur: number = 0): number {
  if (n === 1) {
      return cur;
  }

  const remainder = n % 2;
  const half = n >> 1;
  return numberOfMatches(half + remainder, cur + half);
};