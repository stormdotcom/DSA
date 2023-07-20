const quickSort = (A) => {
    const sort = (arr, s, e) => {
        if (s === e || s > e) {   //1) Single element [s===e] 2) [s > e]
            return;
        }
        let pos = rearrange(arr, s, e); //position
        sort(arr, s, pos - 1);
        sort(arr, pos - 1, e);
        return arr
    }


    sort(A, 0, A.length)
}

const rearrange = (A, s, e) => {  //s-> as pivot
    let l = s + 1;
    let r = e;
    while (l <= r) {
        if (A[l] <= A[s]) {
            l++;
        }
        else if (A[r] > A[s]) {
            r--;
        }
        else {
            [A[l], A[r]] = [A[r], A[l]]; // swap
            l++; r--;
        }
    }
    [A[s], A[r]] = [A[r], A[s]];
    return r;
}
let arr = [10, 3, 8, 15, 6, 12, 2, 18, 7, 1];
console.log(quickSort(arr))