function findCenter(edges: number[][]): number {
  const [[a, b], [c, d]] = edges;
  if (a === c || a === d) {
      return a;
  }

  return b;
};