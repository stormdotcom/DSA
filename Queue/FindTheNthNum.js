// find the nth number which contains only digits (1,2);

let N = [1, 2, 3, 4, 5, 6, 7];
function findNthNumber(n) {
    const stack = [];
    let count = 0;

    // Start with 1 as the initial number
    stack.push(1);
    count++;

    while (count < n) {
        const current = stack.pop();

        // Append 1 to the current number and push it to the stack
        const num1 = parseInt(current.toString() + '1');
        stack.push(num1);
        count++;

        // If we have not reached the desired count yet,
        // append 2 to the current number and push it to the stack
        if (count < n) {
            const num2 = parseInt(current.toString() + '2');
            stack.push(num2);
            count++;
        }
    }

    return stack.pop(); // The nth number
}

const n = 7;
const nthNumber = findNthNumber(n);
console.log(`The ${n}th number containing only digits 1 and 2 is: ${nthNumber}`);
