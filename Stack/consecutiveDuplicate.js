// Given a string, Remove every consecutive duplicate pair of characters, 
// until there are no consecutive duplicate pairs.

import Stack from "./Stack.js";

let stringStack = new Stack();

stringStack.push(5);
stringStack.push(10);
stringStack.push(15);

console.log(stringStack.peek()); // Output: 15

console.log(stringStack.pop()); // Output: 15
console.log(stringStack.pop()); // Output: 10

console.log(stringStack.size()); // Output: 1

console.log(stringStack.isEmpty()); // Output: false

stringStack.clear();
console.log(stringStack.isEmpty()); // Output: true
