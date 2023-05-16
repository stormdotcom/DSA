//Given a sorted array  where every number repeats twice expect 1, find the number

//approach 1: do XOR of elements 
const findUniqueElement = (A, k) => {
    let N = A.length;
    let low = 0, high = N - 1;
    while (low <= high) {
        let mid = Math.floor((high + low) / 2);
        if (mid === 0 || mid === (N - 1)) {
            return A[mid]
        }
        else if (A[mid - 1] !== mid && A[mid + 1] !== mid) {
            return A[mid];
        }
        if (A[mid] === A[mid + 1] && mid % 2 === 0) {
            low = mid + 1;
        }
        else if (A[mid] === A[mid - 1] && mid % 2 !== 0) {
            low = mid + 1;
        }
        else {
            high = mid - 1;
        }
    }
    return -1;
}
let A = [1, 2, 2, 3, 3, 4, 4, 5, 5];
console.log(findUniqueElement(A))
