// Given an one-dimensional integer array A of size N and an integer B.
// Count all distinct pairs with difference equal to B.
// Here a pair is defined as an integer pair (x, y), 
// where x and y are both numbers in the array and their absolute difference is B. write in js two pointer method

const countPairsWithDifference = (A, B) => {
    A.sort((a, b) => a - b); // Sort the array in ascending order
    let count = 0;
    let left = 0;
    let right = 1;

    while (right < A.length) {
        const diff = A[right] - A[left];

        if (diff === B) {
            count++;
            left++;
            right++;
        } else if (diff < B) {
            right++;
        } else {
            left++;
        }

        // Ensure distinct pairs by moving pointers past duplicates
        while (left > 0 && A[left] === A[left - 1]) {
            left++;
        }
        while (right < A.length - 1 && A[right] === A[right + 1]) {
            right++;
        }
    }
    return count;
}