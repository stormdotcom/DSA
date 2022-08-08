
const bubbleSort = (array)=> {
    let length = array.length;
    for(let i=0; i<length; i++){
        for(let j=0; j<length; j++){
            let temp =0
            if(array[j]> array[j+1]){
                temp = array[j];
                array[j] = array[j+1];
                array[j+1] =temp
            }
        }
    }
    return array;
}
let array =[7,6,1,3,2]
console.log(bubbleSort(array))