//frequency-of-element-query		
 function findFreq(A, B) {
			 let freqHM = new Map();
			 let count=0;
			 let result=new Array(B.length).fill(0);
			 for(let i=0; i<A.length; i++){
				if(freqHM.has(A[i])) {
				    count = freqHM.get(A[i])
				    freqHM.set(A[i], count+1);
				}
				else {
				   freqHM.set(A[i], 1);
				}
			 }
			 for(let j=0; j<B.length; j++){
			     if(freqHM.has(B[j])) {
			         result[j]=freqHM.get(B[j])
			     }
			 }
			 return result;
 } 

//First Repeating element
// Given an integer array A of size N, find the first repeating element in it.
// We need to find the element that occurs more than once and whose index of the first occurrence is the smallest.
// If there is no repeating element, return -1.
 function solve(A) {
	    let hashMap = new Map();
        let min =-1;
        for(let i=A.length-1; i>=0; i--){
            if(!hashMap.has(A[i])){
                hashMap.set(A[i],1)
            }
            else {
               min=i
            }
        }
        return min===-1?-1:A[min];
 } 
