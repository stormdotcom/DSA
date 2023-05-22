// You have given a string A having Uppercase English letters.

// You have to find how many times subsequence "AG" is there in the given string.

// NOTE: Return the answer modulo 109 + 7 as the answer can be very large.

const findSeq = (A) => {
    let countA = 0;
    let result = 0;
    for (let i = 0; i < A.length; i++) {
        if (A[i] === "A") countA++;
        if (A[i] === "G") result += countA;
    }
    return result
}

console.log(findSeq("ADGAGAGFG")) //9


console.log(findSeq("AGAGAGAG")) //14