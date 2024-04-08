import fs from "fs";

console.log("here 1");

fs.readFile("write.txt", () => {
    console.log("read file i/o queue 2")
})
process.nextTick(() => {
    console.log("this from microtask queue 3")
});

setTimeout(() => {
    console.log("timer queue ")
})
process.nextTick(() => {
    console.log("this from microtask queue 3")
});
console.log("here 2")
asyncOperation()
    .then((result) => {
        console.log("Operation succeeded. Random number:", result);
    })


function asyncOperation() {
    return new Promise((resolve, reject) => {
        // Simulate an asynchronous operation (e.g., fetching data from a database or API)
        const randomNumber = Math.random();
        if (randomNumber >= 0.1) {
            resolve(randomNumber); // Resolve the Promise with the generated random number
        } else {
            reject(new Error("Random number is less than 0.5")); // Reject the Promise with an error
        }
    });
}