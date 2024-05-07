const binarySearch = (A, k) => {
  let N = A.length;
  let low = 0,
    high = N - 1;
  while (low <= high) {
    let mid = Math.floor((high + low) / 2);
    console.log({ mid, low, high });
    if (A[mid] === k) {
      return mid;
    } else if (A[mid] > k) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
};
let A = [3, 6, 9, 12, 14, 19, 20, 23, 25, 27];
console.log(binarySearch(A, 23));
