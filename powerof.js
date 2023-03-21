// power of base x  with exponent y


function findPower(base, exponent) {
    let result = 1;
    for (let i = 0; i < exponent; i++) {
      result =result * base;
    }
    return result;
  }
  
  console.log(findPower(4, 2)); // output: 8