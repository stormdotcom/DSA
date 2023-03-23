// You are given a matrix A and and an integer B, you have to perform scalar multiplication of matrix A with an integer B.


function scalarMultiplication(A, B) {
    const result = [];
    for (let i = 0; i < A.length; i++) {
      result.push([]);
      for (let j = 0; j < A[i].length; j++) {
        result[i].push(A[i][j] * B);
      }
    }
    return result;
  }


  console.log(scalarMultiplication([[1, 2, 3],[4, 5, 6],[7, 8, 9]], 2))