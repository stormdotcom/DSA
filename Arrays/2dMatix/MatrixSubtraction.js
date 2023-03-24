// You are given two integer matrices A and B having same size(Both having same number of rows (N) and columns (M).
// You have to subtract matrix B from A and return the resultant matrix. 
//(i.e. return the matrix A - B).If A and B are two matrices of the same order (same dimensions). 
//Then A - B is a matrix of the same order as A and B and its elements are obtained by doing an element wise subtraction of A from B.

function subtractMatrices(matrixA, matrixB) {
    // const numRows = matrixA.length;
    // const numCols = matrixA[0].length;
    // const result = [];
  
    // for (let i = 0; i < numRows; i++) {
    //   result[i] = [];
    //   for (let j = 0; j < numCols; j++) {
    //     result[i][j] = matrixA[i][j] - matrixB[i][j];
    //   }
    // }
  
    // return result;


    const numRows = matrixA.length;
    const numCols = matrixA[0].length;
    const result = [];
  
    for (let i = 0; i < numRows; i++) {
      result[i] = [];
      for (let j = 0; j < numCols; j++) {
        result[i][j] = matrixA[i][j] - matrixB[i][j];
      }
    }
  
    return result;
  }