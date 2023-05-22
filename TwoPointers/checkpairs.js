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