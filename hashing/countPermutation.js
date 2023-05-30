// Given 2 string A and B, count all permutation of A present in B
let A = "xyz";
let B = "xyxzxy";

const solve = (A, B) => {
    let hmA = new Map();
    let hmB = new Map();
    let n = A.length;
    let m = B.length;
    let ans = 0;
    for (let i = 0; i < n; i++) {
        const char = A[i];
        hmA.set(char, (hmA.get(char) || 0) + 1);
    }
    for (let i = 0; i < n; i++) {
        const char = A[i];
        hmB.set(char, (hmB.get(char) || 0) + 1);
    }
    let l = 0, r = n - 1
    while (l < m) {
        if (check(hmA, hmB)) {
            ans++;
        }
        else {
            hmB.delete(B[l]);
            l++
            r++;
            let char = B[r]
            hmB.set(char, (hmB.get(char) || 0) + 1);

        }
    }
    return ans;
}

const check = (hmA, hmB) => {
    for (let c = 97; c <= 122; c++) {
        const char = String.fromCharCode(c);
        if (hmA[char] === hmB[char]) {
            return false;
        }
    }
    return true;
}