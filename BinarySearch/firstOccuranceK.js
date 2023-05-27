//Given a sorted array  with duplicates find the first occurrence of k

const binarySearch = (A, k) => {
    let N = A.length, ans = -1;
    let low = 0, high = N - 1;
    while (low <= high) {
        let mid = Math.floor((high + low) / 2);
        if (A[mid] === k) {
            ans = mid;
            high = mid - 1
        }
        else if (A[mid] > k) {
            high = mid - 1;
        }
        else {
            low = mid + 1;
        }
    }
    return ans;
}
let A = [1, 1, 2, 2, 3, 5, 5, 5, 5, 5, 7, 8, 8];
console.log(binarySearch(A, 5))

//TC: log(n)
//SC: O(1)