// array reversing
const arrayReverse = (arr)=>{
    let n = arr.length
    let temp=[]
    let result = "";
    for(let i = 0; i < n; i++)
    {
        result += arr[n-1-i] + " ";
        temp[i]=arr[n-1-i];
    }
    console.log(result);
    console.log(temp)

}

let array1= [1,2,3,4,5]
arrayReverse(array1)