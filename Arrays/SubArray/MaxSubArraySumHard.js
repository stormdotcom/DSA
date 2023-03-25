// given an integer array A find the max subarray sum for all the subarrays

const solve = (A)=>{
    let ans = 0;
    let carry = 0;
    for(let i=0; i<A.length; i++) {
        let sum = carry + A[i];
        ans =  Math.max(sum, ans);
        if(sum <0) {
            carry =0;
        }
        else {
            carry = sum;
        }
    }
    return ans;
}


console.log(solve([2,1,3]));