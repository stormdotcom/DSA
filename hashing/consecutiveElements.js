
// given an integer array, find the length of longest set of consecutive elements from
// the array. Elements are distinct.

let A = [100, 4, 200, 1, 3, 2]; // ans => 4

const solve = (A) => {
    let N = A.length;
    let myset = new Set();
    let ans = 0
    for (let i = 0; i < N; i++) {
        myset.add(A[i])
    };
    for (let i = 0; i < N; i++) {
        if (!myset.has(A[i] - 1)) {
            let currentNum = A[i];
            let currentLength = 1;
            while (myset.has(currentNum + 1)) {
                currentNum++;
                currentLength++;
            }
            ans = Math.max(ans, currentLength)
        }
    }
    return ans
}

console.log(solve(A))