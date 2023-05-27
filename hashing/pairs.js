// given an integer array, find any pair (i, j) such that a a[i] === a[j] 
// abs ( i-j) is minimum  ( |i-j| )

let A = [1, 2, 3, 4, 5, 6, 7, 8];

const solve = (A) => {
    let N = A.length;
    let map = new Map();
    let ans = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < N; i++) {
        if (!map.has(A[i])) {
            map.set(A[i], i);
        }
        else {
            ans = Math.min(ans, (i - map.get(A[i])));
            map.set(A[i], i)
        }
    }
    if (ans === Number.MAX_SAFE_INTEGER) {
        return -1
    }
    return ans;
}

console.log(solve(A))