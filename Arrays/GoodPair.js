// Given an array A and an integer B. A pair(i, j) 
// in the array is a good pair if i != j and (A[i] + A[j] == B). 
// Check if any good pair exist or not.

const checkPair = (A=[], B=0)=>{
    let N = A.length;
    for(let i=0; i<N; i++) {
        for(let j=0; j<N; j++) {
            if(i === j) {
                continue;
            }
            if(A[i] + A[j] === B) {
                return 1
            }
        }
    }
    return false;
}

// console.log(checkPair([1,2,3,4,5], 10))


//optimized version
// hashing -> Hash sets

function hasGoodPair(A, B) {
    const set = new Set();
    let N = A.length;
    for (let i = 0; i < N; i++) {
      const toFind = B - A[i];
      if (set.has(toFind)) {
        return true;
      }
      set.add(A[i]);
    }
    return false;
  }

  console.log(checkPair([1,2,3,4,5], 10))