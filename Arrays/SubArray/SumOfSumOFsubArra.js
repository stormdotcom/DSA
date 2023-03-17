// You are given an integer array A of length N.
// You have to find the sum of all subarray sums of A.
// More formally, a subarray is defined as a contiguous part of an array which we can obtain by deleting zero or more elements from either end of the array.
// A subarray sum denotes the sum of all the elements of that subarray.


const subarraySum = (A) => {

    let sum = 0, N = A.length;
    for(let i=0; i<N; i++) {
        let contribution = A[i] * (i + 1) * (N - i);
        sum = sum + contribution;
    }
    return sum;
}

console.log(subarraySum([2,1,3]));

