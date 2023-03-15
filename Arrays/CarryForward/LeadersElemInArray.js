// Given an integer array A containing N distinct integers, you have to find all the leaders in array A. An element is a leader if it is strictly greater than all the elements to its right side.

// NOTE: The rightmost element is always a leader.

const findLeader = (A)=> {
    let maxEle = Number.MIN_SAFE_INTEGER, N = A.length, result=[];
    for(let i=N-1; i>=0; i--) {
        if(A[i]>maxEle) {
            maxEle = A[i];
            result.push(A[i])
        }
    }
    return result;
}

console.log(findLeader([16, 17, 4, 3, 5, 2]))