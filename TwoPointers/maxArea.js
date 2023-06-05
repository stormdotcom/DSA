// Given n non-negative integers A[0], A[1], ..., A[n-1] , where each represents a point at coordinate (i, A[i]).
// N vertical lines are drawn such that the two endpoints of line i is at (i, A[i]) and (i, 0).
// Find two lines, which together with x-axis forms a container, such that the container contains the most water.
// Note: You may not slant the container.

function maxArea(A) {
    let N = A.length;
    let p1 = 0;
    let p2 = N - 1;
    let max = 0;
    while (p1 < p2) {
        let minheight = Math.max(A[p1], A[p2]);
        let width = p2 - p1;
        let max = Math.max(max, (minheight * width));
        if (p2 < p1) {
            p2--;
        }
        else {
            p1++;
        }
    }
    return max;
}

console.log(maxArea())