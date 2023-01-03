function solution(A) {
    let minAvg = (A[0] + A[1]) / 2;
    let minAvgStart = 0;
    const arrLength = A.length;

    for (let i = 0; i < arrLength - 2; i++) {
        if ((A[i] + A[i + 1]) / 2 < minAvg) {
            minAvg = (A[i] + A[i + 1]) / 2;
            minAvgStart = i;
        }
        if ((A[i] + A[i + 1] + A[i + 2]) / 3 < minAvg) {
            minAvg = (A[i] + A[i + 1] + A[i + 2]) / 3;
            minAvgStart = i;
        }
    }
    if ((A[arrLength - 1] + A[arrLength - 2]) / 2 < minAvg) {
        minAvg = (A[arrLength - 1] + A[arrLength - 2]) / 2;
        minAvgStart = arrLength - 2;
    }
    return minAvgStart;
}
