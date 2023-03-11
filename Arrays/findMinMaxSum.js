//Given an array A of size N. 
//You need to find the sum of Maximum and Minimum element in the given array.

function findMinMaxSum(arr) {
    let max = arr[0];
    let min = arr[0];
  
    // Find the maximum and minimum element in the array
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
      if (arr[i] < min) {
        min = arr[i];
      }
    }
  
    // Return the sum of the maximum and minimum element
    return max + min;
  }
  
  // Example usage:
  const arr = [3, 5, 1, 9, 7, 0];
 console.log(findMinMaxSum(arr));