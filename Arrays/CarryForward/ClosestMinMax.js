// Given an array A, find the size of the smallest subarray such that it contains at least one occurrence of the maximum value of the array

// and at least one occurrence of the minimum value of the array.


const closestMinMax = (A) => {
    let min = A[0], max = A[0], N = A.length;
    let minI =1, maxI =1, ans= N;;

    for(let i=0; i<A.length; i++) {
        min = A[i] < min ? A[i] : min;
        max = A[i] > max ? A[i] : max;
    }
    if(min===max) {
        return 1;
}
for(let i=N-1; i>=0; i--) {
    if(A[i]==min){
            minI=i;
            let diff = Math.abs(maxI - minI);
            ans= diff < ans ? diff : ans;
    }
    else if(A[i]==max) {
            maxI=i;
            let diff = Math.abs(maxI - minI);
            ans= diff < ans ? diff : ans;
    }
}
return ans+1;
}

closestMinMax([2,6,,5,6,8,3])