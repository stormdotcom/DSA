//frequency-of-element-query		
function findFreq(A, num) {
			 let freqHM = {};
			 let count=0
			 for(let i=0; i<A.length; i++){
				freqHM[A[i]] =  freqHM[A[i]] ? freqHM[A[i]]+1 : 1;
			 }
			  if(freqHM[num]) {
			     return freqHM[num]
			  }
			  else {
			      return 0
			  }
 }
 
function findFreqFormQuery(A, B){
		let result =[];
		for(let q=0; q<B.length; q++){
			result.push(findFreq(A, B[q]))
		}
		return result;
	}
