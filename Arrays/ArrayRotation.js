
//Given an integer array A of size N and an integer B, 
//you have to return the same array after rotating it B times towards the right.

const reverseInRange=(A=[], B, C)=>{
    let i=B, j=C;
    while(i<j){
        let temp = A[i];
        A[i] = A[j];
        A[j] = temp;
        i++
        j--
    }
    return A;
}


const reverseKTimes = (A=[], B) =>{
    let N = A.length;
    let k = B%N;
    let reversedArray = reverseInRange(A, 0, N-1);
    let K_elem = reverseInRange(reversedArray, 0, k-1);
    let n_k_elem = reverseInRange(K_elem, k, N-1);

    return n_k_elem;
} 


console.log(reverseKTimes([1,2,3,4], 2))