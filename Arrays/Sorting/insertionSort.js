const sort = (A) => {
  const N = A.length;
  for (let i = 1; i < N; i++) {
    let j = i - 1;
    while (j >= 0 && A[j] > A[j + 1]) {
      [A[j], A[j + 1]] = [A[j + 1], A[j]]; // swapping
      j--;
    }
  }
  return A;
};
