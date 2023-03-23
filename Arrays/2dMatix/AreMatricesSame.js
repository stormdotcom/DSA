// You are given two matrices A & B of equal dimensions and you have to check whether two matrices are equal or not.

function areMatricesEqual(A, B) {
    if (A.length !== B.length || A[0].length !== B[0].length) {
      return false;
    }
    
    for (let i = 0; i < A.length; i++) {
      for (let j = 0; j < A[i].length; j++) {
        if (A[i][j] !== B[i][j]) {
          return false;
        }
      }
    }
    
    return true;
  }

  let A = [[1,2,3], [4,5,6], [7,8,9]];
  let B = [[1,2,3], [4,5,6], [7,8,9], [1,1,1]]
  console.log(areMatricesEqual(A,B))