const selectionSort = (array)=> {
    let length = array.length;
    for(let i=0; i<length; i++){
        for(let j=i+1; j<length; j++) {
            let temp =0;
            if(array[i] > array[j]) {
                temp = array[i]
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    return array;
}
let array =[7,6,1,3,2]
console.log(selectionSort(arrayd))