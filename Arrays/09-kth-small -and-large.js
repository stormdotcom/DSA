let numbers = [ 10, 3, 4, 5, 2,11,20,18,19, 31, 25];

function kThSmallAndkThLarge(array){
    let newArray = [...array];
    let length = newArray.length;
    for(let i=0; i<length; i++){
        for(let j=0; j<length; j++){
            let temp=0;
            if(newArray[j] > newArray[j+1]){
                temp = array[j];
                newArray[j] = newArray[j+1];
                newArray[j+1] = temp;
            }
        }
    }
    return [ newArray[0], newArray[length - 1] ]
}

console.log(kThSmallAndkThLarge(numbers))