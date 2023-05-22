
// given n distinct sorted elements, check if there exists a pair(i,j)  exists
// such that arr[i] - arr[j] =k (i != j && k > 0)

const arr = [1, 3, 5, 7, 9];
const k = 4;

const checkDiffernceKExists = (A, K) => {
    let N = A.length;
    let p1 = 0, p2 = 1;
    while (p2 < N) {
        let diff = A[p2] - A[p1];
        if (diff === K) return true;
        else if (diff > K) {
            p1++
        }
        else {
            p2++;
        }
        if (p1 == p2) {
            p2++
        }
    }
    return false;
}
console.log(checkDiffernceKExists(arr, k));