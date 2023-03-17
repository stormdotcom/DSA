// You are given an integer array C of size A. Now you need to find a subarray (contiguous elements) so that the sum of contiguous elements is maximum.
// But the sum must not exceed B

// const getMax = (A, B, C) => {
//     let max = 0;
//     for(let i=0; i<A; i++) {
//         let sum = 0;
//         for(let j=0; j<A; j++) {
//             sum = sum + C[i];
//             if(sum>max) {
//                 max = sum;
//             }
//         }
//     }
//     return max;
// }
const getMax = (A, B, C) => {
    let max = 0;
    for(let i=0; i<A; i++) {
        let sum = 0;
        for(let j=0; j<A; j++) {
            sum = sum + C[i];
            if(sum<B && sum>max) {
                max=sum;
            }
        }
    }
    return max;
}

console.log(getMax(5, 40, [1,3,5,7,9]))



