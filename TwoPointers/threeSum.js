// Given an array A of N integers, find a triple a,bc, such that a+b+c = 0
// Find all unique triplets. also triplets must be in non decreasing order. (ie a<=b<=c)
// The solution set must not contain duplicate triplets, array not sorted

const threeSum = (A) => {
    A.sort((a, b) => a - b);
    let N = A.length;
    let count = 0;
    for (let i = 0; i < (N - 2); i++) {
        if (A[i] > 0) {
            break
        }
        if (i > 0 && A[i] === A[i - 1]) {
            continue;
        }
        let k = -A[1];
        let p1 = i + 1, p2 = N - 1;
        while (p1 < p2) {
            let sum = A[p1] + A[p2];
            if (sum > k) {
                p2--;
            }
            else if (sum < k) {
                p1++;
            }
            else {
                count++;
                p1++;
                while (p1 < p2 && A[p1] === A[p1 - 1]) {
                    p1++;
                }
            }
        }
    }
    return count;
}
console.log(threeSumClosest([-1, 0, 1, 2, -1, 4]));