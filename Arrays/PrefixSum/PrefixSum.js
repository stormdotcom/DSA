//Generate prefixSum

 function prefixSum(arr) {
  let prefixArr = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    prefixArr[i] = prefixArr[i - 1] + arr[i];
  }
  return prefixArr;
}


console.log(prefixSum([1,2,3,4,5]))