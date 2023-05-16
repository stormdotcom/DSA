// Given an array which is formed by rotating a distinct sorted array by k times, 
// search for a given key in rotated array. you are given the rotated arr
// Rotation here means brining the last element to the first

function searchInRotatedArray(A, B) {
    let low = 0;
    let high = A.length - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);

        if (A[mid] === B) {
            return mid;
        }

        if (A[low] <= A[mid]) { // first half is sorted
            if (A[low] <= B && B < A[mid]) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        } else { // second half is sorted
            if (A[mid] < B && B <= A[high]) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
    }

    return -1;
}



// Initialize the low and high indices to the first and last elements of the array, respectively.

// While the low index is less than or equal to the high index, do the following:

// a. Calculate the middle index as the average of the low and high indices.

// b. If the middle element is the target value B, return its index.

// c. If the first half of the array from low to mid is sorted:

// If the target value B lies within the sorted first half, update the high index to mid - 1 and continue the search.

// Otherwise, update the low index to mid + 1 and continue the search.

// d. Otherwise, if the second half of the array from mid to high is sorted:

// If the target value B lies within the sorted second half, update the low index to mid + 1 and continue the search.

// Otherwise, update the high index to mid - 1 and continue the search.

// If the target value B is not found after the loop, return -1.