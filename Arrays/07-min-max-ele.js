let array = [3, 2, 1, 56, 10000, 167];



function minMaxElement(array=[]) {
    let length = array.length;
    let newArray = [...array];
    for(let i=0; i<length; i++) {
        for(let j=0; j<length; j++) {
            let temp=0;
            if(newArray[j] > newArray[j+1]) {
                temp  =  array[j];
                newArray[j] = newArray[j+1];
                newArray[j+1] = temp;
            }
        }
    }
    return [newArray[0], newArray[length - 1]];
}

console.log(minMaxElement(array))