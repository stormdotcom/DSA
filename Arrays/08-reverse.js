let numbers = [1, 2, 3, 4, 5];


function reversedNumbers(array) {
    let reversedNumbersArray = [];
    for(let i = array.length -1; i >= 0; i--) {
        reversedNumbersArray.push(array[i]);
      }

      return reversedNumbersArray
}


console.log(reversedNumbers(numbers));


