
const inversionCount = (A, s = 0, e) => {
    if (s == e) {
        return 0;
    }
    let mid = Math.floor((s + e) / 2);
    let pairA = inversionCount(A, s, mid);
    let pairB = inversionCount(A, mid + 1, e);
    let pairAB = merge(A, s, mid, e);
    return (pairB + pairA + pairAB);
}

const merge = (A, s, m, e) => {
    let C = new Array(e - s + 1);
    let count = 0
    let p1 = s, p2 = m + 1, p3 = 0;
    while (p1 <= m && p2 <= e) {
        if (A[p1] <= A[p2]) {
            C[p3] = A[p1];
            p1++; p3++;

        }
        else {
            C[p3] = A[p2];
            p2++; p3++;
            count = count + ((m - s + 1) - p1); // [s, m] => subarray =>  m-s+1 
        }
    }
    while (p1 < m) {
        C[p3] = A[p1];
        p1++; p3++;
    }
    while (p2 < e) {
        C[p3] = A[p2];
        p3++; p2++;
    }
}
let arr = [10, 3, 8, 15, 6, 12, 2, 18, 7, 1];

let A = [10, 3, 8, 15, 6, 12, 2, 18, 7, 1];
console.log(inversionCount(A, 0, A.length))
//          6  2  4  1  2  3  1  2  1  0