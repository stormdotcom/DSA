// given an integer array, such that for all i, A[i]=0 return the final array after performing queries.
//Query(i, val) : add value to all numbers from index i to (n-1)


const solve = (A, B)=> {
    let N = B.length;
    for(let i=0; i<N; i++) {
        A[B[i][0]] = B[i][1];
    }
    let pf = [A[0]]
    for(let i=1; i<A.length; i++) {
        pf[i] = pf[i-1] + A[i]
    }
    return pf;
}

// for (let i = 1; i < arr.length; i++) {
//     prefixArr[i] = prefixArr[i - 1] + arr[i];
//   }

let A = [0,0,0,0,0,0]
let B= [[2,4], [3,-1], [0,2], [4,1]]
console.log(solve(A, B))