//To count the occurrences of string B in string A using the Z algorithm

function countOccurrences(A, B) {
    const combinedString = B + "$" + A; // Concatenate B, a separator ($), and A
    const Z = calculateZArray(combinedString);

    const patternLength = B.length;
    let count = 0;

    for (let i = patternLength + 1; i < Z.length; i++) {
        if (Z[i] === patternLength) {
            count++;
        }
    }

    return count;
}

function calculateZArray(text) {
    const n = text.length;
    const Z = new Array(n).fill(0);

    let L = 0;
    let R = 0;

    for (let i = 1; i < n; i++) {
        if (i > R) {
            L = R = i;
            while (R < n && text[R - L] === text[R]) {
                R++;
            }
            Z[i] = R - L;
            R--;
        } else {
            const k = i - L;
            if (Z[k] < R - i + 1) {
                Z[i] = Z[k];
            } else {
                L = i;
                while (R < n && text[R - L] === text[R]) {
                    R++;
                }
                Z[i] = R - L;
                R--;
            }
        }
    }

    return Z;
}

// Example usage
const A = "abcabacaba";
const B = "aba";
const occurrences = countOccurrences(A, B);
console.log(occurrences);
