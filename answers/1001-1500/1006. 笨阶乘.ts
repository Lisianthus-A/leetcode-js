function clumsy(N: number): number {
    if (N <= 4) {
        return [1, 2, 6, 7][N - 1];
    }
    
    return [N + 1, N + 2, N + 2, N - 1][N % 4];
};