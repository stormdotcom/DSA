console.log('A');

setTimeout(() => {
    console.log('B');
    process.nextTick(() => {
        console.log('C');
    });
    setImmediate(() => {
        console.log('D');
    });
}, 0);

process.nextTick(() => {
    console.log('E');
});

setImmediate(() => {
    console.log('F');
});

console.log('G');
// console.log('Node.js version:', process.version);

// output: A, G, E, B, C, F, C
