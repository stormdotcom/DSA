// Given an array. find the nearest smaller element 
// position wise nearest index on left for every element
import Stack from "./Stack.js";

let A = [4, 5, 2, 10, 11, 2];

const solveNSL = (A) => {
    let N = A.length;
    let stack = new Stack();
    let NSL = new Array(N);

    for (let i = 0; i < N; i++) {
        while (!stack.isEmpty() && stack.peek() >= A[i]) {
            stack.pop();
        }
        if (stack.isEmpty()) {
            NSL[i] = -1;
        } else {
            NSL[i] = stack.peek();
        }
        stack.push(A[i]);
    }
    return NSL;
};

console.log(solveNSL(A));