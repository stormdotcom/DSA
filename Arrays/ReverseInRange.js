// Given an array A of N integers. Also given are two integers B and C. 
//Reverse the array A in the given range [B, C]


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

console.log(reverseInRange([0,1,2,3,4,5,6,7,8,9,10], 3, 8))

