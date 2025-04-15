// console.log('A');

// setTimeout(() => {
//     console.log('B');
//     process.nextTick(() => {
//         console.log('C');
//     });
//     setImmediate(() => {
//         console.log('D');
//     });
// }, 0);

// process.nextTick(() => {
//     console.log('E');
// });

// setImmediate(() => {
//     console.log('F');
// });

// console.log('G');

// console.log('Node.js version:', process.version);

// output: A, G, E, B, C, F, C


// console.log('Start');

// setTimeout(() => console.log('Timeout 1'), 0);

// setTimeout(() => {
//     console.log('Timeout 2');
//     Promise.resolve().then(() => console.log('Promise inside timeout'));
// }, 0);

// Promise.resolve().then(() => {
//     console.log('Promise 1');
//     setTimeout(() => console.log('Timeout 3'), 0);
// });

// console.log('End');


const name = "Global";

(() =>{
  const name = "IIFE";
  console.log(name); // Output: "IIFE"
})();

console.log(name); // Output: "Global"
"Hello, IIFE!"
  