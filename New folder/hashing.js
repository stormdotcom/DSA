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
