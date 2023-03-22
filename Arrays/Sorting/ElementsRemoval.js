// Given an integer array A of size N. You can remove any element from the array in one operation.
// The cost of this operation is the sum of all elements in the array present before this operation.

// Find the minimum cost to remove all elements from the array. 

const removeElement = (A)=>{
    A.sort();
    let N = A.length;
    let sum=0;
    for(let i=0; i<N; i++){
        sum = sum +(N-i) * A[i]
    }
    return sum;
}

console.log(removeElement([2,1,4]));