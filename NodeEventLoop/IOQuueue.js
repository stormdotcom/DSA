import fs from "fs";

fs.readFile("./readme.md", () => {
    console.log("here read file event loop")
});

process.nextTick(() => console.log("here process.nextTick 1"))
f