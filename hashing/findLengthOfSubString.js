// Given 2 string A & B |A| =n, |B|=m Find min length of substring of B
// Containing all characters of A. only smaller letters

let A = "xyz";
let B = "xatyxuzmxpty";


const solve = (A, B) => {
    const n = A.length;
    const m = A.length;
    let hmA = new Map();
    let hmB = new Map();
    let ans = Number.MAX_SAFE_INTEGER
    for (let i = 0; i < n; i++) {
        const char = A[i];
        hmA.set(char, (hmA.get(char) || 0) + 1);
        // if (hmA.has(char)) {
        //     hmA.set(char, hmA.get(char) + 1);
        // } else {
        //     hmA.set(A[i], 1);
        // }
    }
    for (let i = 0; i < n; i++) {
        const char = B[i];
        hmB.set(char, (hmB.get(char) || 0) + 1);
        // if (hmB.has(char)) {
        //     hmB.set(char, hmB.get(char) + 1);
        // } else {
        //     hmB.set(A[i], 1);
        // }
    }
    if (check(hmA, hmB)) {
        return n;
    }

    let l = 0; r = n - 1;
    while (l < m) {
        if (check(hmA, hmB)) {
            ans = Math.min(ans, r - (l + 1));
            hmB.delete(B[l]);
            l++;
        }
        else {
            r++;
            if (r === m) break;
            let char = B[r]
            hmB.set(char, (hmB.get(char) || 0) + 1);
            // if (hmB.has(char)) {
            //     hmB.set(char, hmB.get(char) + 1);
            // } else {
            //     hmB.set(char, 1);
            // }
        }
    }
    return ans;

}

const check = (hmA, hmB) => {
    for (let c = 97; c <= 122; c++) {
        const char = String.fromCharCode(c);
        if (hmA[char] > hmB[char]) {
            return false;
        }
    }
    return true;
}
const a = "acbbt", b = "axybcybbxyact";
console.log(solve(a, b))