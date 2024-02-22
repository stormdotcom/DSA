

function printNTimes(name, i) {
    if (i < 8) {
        setTimeout(() => {
            console.log("Recursion :printing name " + name, i)
            printNTimes(name, i - 1)
        }, 100)


    }

}
printNTimes('Ajmal', 8)