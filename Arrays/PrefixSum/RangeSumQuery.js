//You are given an integer array A of length N.
// You are also given a 2D integer array B with dimensions M x 2, where each row denotes a [L, R] query.
// For each query, you have to find the sum of all elements from L to R indices in A (0 - indexed).
// More formally, find A[L] + A[L + 1] + A[L + 2] +... + A[R - 1] + A[R] for each query.



const rangeQuerySum = (A, B) => {
    let prefixSum = [A[0]];
    for(let i=0; i<A.length; i++){
        prefixSum[i] = prefixSum[i-1] + A[i]
    }

    let result = [];
    for(let i=0; i <B.length; i++){
        let L = B[i][0];
        let R = B[i][1];
        let sum = prefixSum[R] - (L > 0 ? prefixSum[L-1] : 0 );
        result.push(sum);
    }
    return result;
}