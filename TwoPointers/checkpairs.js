// given distinct sorted elements, check if there exists a pair(i,j) 
// such that arr[i] + arr[j] =k (i != j)

const arr = [1, 3, 5, 7, 9];
const K = 12;

const checkPairExists = (A, K) => {
    let N = A.length;
    let p1 = 0, p2 = N - 1;
    while (p1 < p2) {
        let sum = A[p1] + A[p2];
        if (sum === K) return true;
        else if (sum < K) {
            p1++
        }
        else {
            p2--;
        }
    }
    return false;
}
console.log(checkPairExists(arr, K));

// Given a sorted array of integers (not necessarily distinct) A and an integer B, 
// find and return how many pair of integers 
// ( A[i], A[j] ) such that i != j have sum equal to B.
// Since the number of such pairs can be very large, return number of such pairs modulo (109 + 7).
// using two pointer
function countPairsWithSum(arr, B) {
    const mod = 1e9 + 7;
    let count = 0;
    let numMap = new Map();

    for (let i = 0; i < arr.length; i++) {
        let complement = B - arr[i];
        if (numMap.has(complement)) {
            count += numMap.get(complement);
            count %= mod;
        }
        numMap.set(arr[i], (numMap.get(arr[i]) || 0) + 1);
    }

    return count;
}