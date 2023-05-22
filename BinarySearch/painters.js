//Given 2 integers A and B and an array of integers C of size N. Element C[i] represents the length of ith board.
// You have to paint all N boards [C0, C1, C2, C3 … CN-1]. There are A painters available and each of them takes B units of time to paint 1 unit of the board.
// Calculate and return the minimum time required to paint all boards under the constraints that any painter will only paint contiguous sections of the board.

let A = 2;
let B = 1;
let C = [1, 8, 11, 3];
const findMin = (A, B, C = []) => {
    const MOD = 10000003;
    let ans = 0;
    let N = C.length;
    let maxLen = C[0];
    let sum = C[0];
    for (let i = 0; i < N; i++) {
        maxLen = Math.max(maxLen, C[i]);
        sum += C[i];
    }
    let low = maxLen * B;
    let high = sum * B;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (check(A, B, C, mid)) {
            ans = mid;
            high = mid - 1;
        }
        else {
            low = mid + 1;
        }
    }
    return ans;
    return (low * B) % MOD;
}

const check = (A, B, C = [], time) => {
    let count = 1;
    let totalTime = 0;
    for (let i = 0; i < C.length; i++) {
        totalTime = totalTime + (C[i] * B);
        if (totalTime > time) {
            count++;
            totalTime = C[i] * B;
        }
    }
    if (count > A) {
        return false;
    }
    else {
        return true;
    }
}

console.log(findMin(A, B, C))
