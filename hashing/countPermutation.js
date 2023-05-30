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
        const char = B[i];
        hmB.set(char, (hmB.get(char) || 0) + 1);
    }

    let l = 0, r = n - 1;

    while (r < m) {
        if (check(hmA, hmB)) {
            ans++;
        }

        hmB.set(B[l], hmB.get(B[l]) - 1);
        l++;
        r++;
        let char = B[r];
        hmB.set(char, (hmB.get(char) || 0) + 1);
    }

    return ans;
};

const check = (hmA, hmB) => {
    for (let [key, value] of hmA) {
        if (hmB.get(key) !== value) {
            return false;
        }
    }

    return true;
};