function countdown(n){
    return n < 1 ? [] : [n].concat(countdown(n - 1));
 }

 console.log(countdown(10));