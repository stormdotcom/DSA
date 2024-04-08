
process.nextTick(() => console.log("micro task queue nextTick cb 1"))
process.nextTick(() => console.log("micro task queue nextTick cb 2"))

Promise.resolve().then(() => console.log("micro task queue Promise cb 3"));
process.nextTick(() => console.log("micro task queue nextTick cb 3"));
Promise.resolve().then(() => console.log("micro task queue Promise cb 1"));
Promise.resolve().then(() => console.log("micro task queue Promise cb 2"));