
// An arithmetic expression is given by a string array A of size N. Evaluate the value of an arithmetic expression in Reverse Polish Notation.

// Valid operators are +, -, *, /. Each string may be an integer or an operator.

const solve = (A) => {
    const stack = [];

    for (let i = 0; i < A.length; i++) {
        const token = A[i];

        if (isOperator(token)) {
            // Perform the operation on the top two elements of the stack
            const operand2 = stack.pop();
            const operand1 = stack.pop();
            const result = evaluate(token, operand1, operand2);
            stack.push(result);
        } else {
            // Push the operand onto the stack
            stack.push(parseFloat(token));
        }
    }

    // The final result will be at the top of the stack
    return stack.pop();
}

function isOperator(token) {
    return token === "+" || token === "-" || token === "*" || token === "/";
}

function evaluate(operator, operand1, operand2) {
    switch (operator) {
        case "+":
            return operand1 + operand2;
        case "-":
            return operand1 - operand2;
        case "*":
            return operand1 * operand2;
        case "/":
            return Math.floor(operand1 / operand2); // Integer division
        default:
            return 0;
    }
}
const expression = ["2", "1", "+", "3", "*"];
console.log(solve(expression))