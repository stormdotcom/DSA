function selectionSort(arr) {
  // iterate through each element in the array
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i; // assume the current index has the minimum value

    // find the minimum element in the remaining unsorted part of the array
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // swap the minimum element with the current element
    if (minIndex !== i) {
      let temp = arr[minIndex];
      arr[minIndex] = arr[i];
      arr[i] = temp;
    }
  }

  return arr; // return the sorted array
}

// example usage
let arr = [64, 25, 12, 22, 11];
console.log(selectionSort(arr));