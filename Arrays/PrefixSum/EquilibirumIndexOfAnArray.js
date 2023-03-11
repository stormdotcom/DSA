// You are given an array A of integers of size N.
// Your task is to find the equilibrium index of the given array
// The equilibrium index of an array is an index such that the sum of elements at lower indexes is equal to the sum of elements at higher indexes.
// If there are no elements that are at lower indexes or at higher indexes, then the corresponding sum of elements is considered as 0.



// function equilibriumIndex(A) {
//     let prefixSum = [A[0]];
//     for (let i = 1; i < A.length; i++) {
//       prefixSum[i] = prefixSum[i - 1] + A[i];
//     }
//     let totalSum = prefixSum[A.length - 1];
//     for (let i = 0; i < A.length; i++) {
//       let leftSum = prefixSum[i] - A[i];
//       let rightSum = totalSum - prefixSum[i];
//       if (leftSum === rightSum) {
//         return i;
//       }
//     }
//     return -1;
//   }
function prefixSum(arr) {
    let prefixArr = [arr[0]];
    for (let i = 1; i < arr.length; i++) {
      prefixArr[i] = prefixArr[i - 1] + arr[i];
    }
    return prefixArr;
  }
const equilibriumIndex = ( A =[]) => {
   const pfSA = prefixSum(A);
    for(let i=0; i <A.length; i++) {
        let leftSum = (i===0) ? 0 : prefixSum[i - 1];
        let rightSum = prefixSum[A.length - 1] - prefixSum[i];
        if(leftSum === rightSum) {
            return i
        }
    }
    return -1
}

  console.log(equilibriumIndex([0, -3, 5, -4, -2, 3, 1, 0]))