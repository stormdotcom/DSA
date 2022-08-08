

function printNtimes(name, i){
    if(i < 8) {
    setTimeout(()=>{
        console.log("Recursion :printing name " + name,i)
        printNtimes(name, i-1)
    }, 100)


 }

}
printNtimes('Ajmal', 8)