let A = "amazon";
let count = 0;
for(let i = 0; i < A.length; i++) {
    if(A[i] === 'a') {
        count += (A.length - i);
    }
}
console.log(count);