function isMonotonic(A: number[]): boolean {
    if (A.length <= 2) {
        return true;
    }

    let flag1: boolean = true;  //是否递增
    let flag2: boolean = true;  //是否递减

    for (let i = 1; i < A.length && (flag1 || flag2); i++) {
        if (A[i - 1] > A[i]) {
            flag1 = false;
        }
        if (A[i - 1] < A[i]) {
            flag2 = false;
        }
    }


    return flag1 || flag2;
};