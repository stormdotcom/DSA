// Rmoeve an ele from array and return new array

const array = [0, 1, 2, 3, 4, 5];

const removeWithIndex = (A, i)=>{
    const newArray = [...array]; // create a copy of the original array
newArray.splice(i, 1); // remove one element at the specified index
return newArray;
}

//console.log(removeWithIndex(array, 7));
 // output: [1, 2, 4, 5]

 console.log(array.slice(0,1))