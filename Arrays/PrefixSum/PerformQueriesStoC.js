// given an integer array, such that for all i, A[i]=0 return the final array after performing queries.
//Query(s, c, val) : add value to all numbers from index s to c

let A = new Array(10).fill(0);

let B= [[3,6,1], [2,7,3], [5,8,-3], [1,9,2]];


const solve = (A, B)=> {
    let q = B.length;
    let N = A.length
    for(let i=0; i<q; i++) {
        let s = B[i][0];
        let e = B[i][1];
        let val = B[i][2];
        A[s] = val;
        if(e !==N-1) {
            A[e+1] = A[e+1] + val;
        }
    }
    let pf = [A[0]]
    for(let i=1; i<A.length; i++) {
        pf[i] = pf[i-1] + A[i]
    }
    return pf;
}

console.log(solve(A, B))