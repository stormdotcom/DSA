// sort the array in desc order of no of factors
// if there is a tie, the smaller should come first

function countFactors(n) {
    let count = 0;
    for (let i = 1; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        if (n / i === i) {
          count++;
        } else {
          count += 2;
        }
      }
    }
    return count;
  }


const comp = (a, b)=> {
    let fA = countFactors(a);
    let fB = countFactors(b);
 
  if( (fA>fB) || (fA === fB && a < b)){
    return true;
  }
  return false;
    
}
let A = [2,5,4,8,16,28,100];
console.log(A);
console.log(A.sort(comp))