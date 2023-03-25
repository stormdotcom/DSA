//given an integer Array A, find the max value of f(i,j) , f(i,j) = A[i] - A[j]

function maxDiff(arr) {
    let minSoFar = arr[0];
    let maxDiff = -Infinity;
    
    for (let i = 1; i < arr.length; i++) {
      maxDiff = Math.max(maxDiff, arr[i] - minSoFar);
      minSoFar = Math.min(minSoFar, arr[i]);
    }
    
    return maxDiff;
  }