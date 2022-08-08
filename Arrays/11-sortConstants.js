
  function sortConstants(array,length)
  {
        
      let low = 0; 
      let high = length - 1; 
      let mid = 0;
      let temp = 0; 
      while (mid <= high) {
          if(array[mid] == 0) { 
              temp = array[low]; 
              array[low] = array[mid]; 
              array[mid] = temp; 
              low++; 
              mid++; 
              console.log('array: ', array )
          }
          else if(array[mid] == 1) {
              mid++; 
              b++
          } else {
              temp = array[mid]; 
              array[mid] = array[high]; 
              array[high] = temp; 
              high--;
          }
            
      }
  }
  function printArray(arr,length)
  {
      let i;
      for (i = 0; i < length; i++)
      {
        console.log(arr[i] + " ");
      }
      console.log(' ')
  }

  let arr= [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1 ];
      
  let length = arr.length;
  sortConstants(arr, length);
  printArray(arr, length); 