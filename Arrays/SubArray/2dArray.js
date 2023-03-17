// You are given an array A of N integers.
// Return a 2D array consisting of all the subarrays of the array

const solve = ( A ) => {
    let ans = [], N = A.length;
    for(let i=0; i <N; i++) {
        for(let j=0; j<N; j++) {
            let subArr = [];
            for(let k=i; k<=j; k++) {
                subArr.push(A[k]);
            }
            if(subArr.length) {
                ans.push(subArr);
            }
          
        }

    }
    return ans;
}

console.log(solve([1,2,3]))