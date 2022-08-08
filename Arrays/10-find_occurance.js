const arr = [1,1,1,1,2,2,2,3,3,3,3,3,3,3,4,4,5];


function findFreequency(array, number) {
    const counts = {};
    for (let num of array) {
        counts[num] = counts[num] ? counts[num] + 1 : 1;
      }
      return counts[number];
}

console.log(findFreequency(arr, 4) )