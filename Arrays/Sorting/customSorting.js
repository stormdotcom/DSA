
//customer sorting algo

const comp= (a, b)=>{ // sort asc
    //return true if a before b
    //return false otherwise
    if(a<b) return true;
    return false
}

const comp2= (a, b)=>{ // sort desc
    if(b<a) return true;
    return false
}

let A = [8,16,28,100,2,5,4,];
console.log(A);
let B= A.sort(comp);
console.log(B)