let findMedianSortedArrays = function(arr1, arr2) {

    let p1=0;
    let p2=0;

    const len1 = arr1.length;
    const len2 = arr2.length;

    const length = len1 + len2;
    const mergedArray = []
    if(length === 0) return null;

    while(p1 < len1 && p2 < len2 ) {
        if(arr1[p1] <= arr2[p2] ) mergedArray.push(arr1[p1++])
        else mergedArray.push(arr2[p2++])  

    }
    while(p1 < len1) {
        mergedArray.push(arr1[p1++])
    }

    while(p2 < len2) {
        mergedArray.push(arr2[p2++])
    }

    const isOdd = length%2
    console.log(mergedArray)
    if(isOdd) return  mergedArray[(length-1)/2]   

    return ( mergedArray[length/2] + mergedArray[length/2 - 1]  ) / 2
};

let arr1 = [1,2,3]
let arr2 = [4]
console.log(findMedianSortedArrays(arr1, arr2))