//Given N cows and M stalls. they are located on the x-axis at different locations.
//Place all N cows such a way that min distance b/w any 2 cows is maximized
//m = > no of stalls

const minDistanceCow = (N, stalls) => {
    stalls.sort((a, b) => a - b);
    let low = 1;
    let high = stalls[stalls.length - 1] - stalls[0];
    let ans = 0
    while (low <= high) {
        let mid = Math.floor((low + high) / 2); // low + ( high-low)/2
        if (check(stalls, N, mid)) {
            ans = mid;
            low = mid + 1;
        }
        else {
            high = mid - 1;
        }
    }
    return ans;

}

const check = (stalls = [], n, min_dist) => {
    // n number of cows, 
    // min_dist => mid of each search
    let count = 1;
    let left_cow_pos = stalls[0];
    for (let i = 1; i < stalls.length; i++) {
        if ((stalls[i] - left_cow_pos) >= min_dist) {
            count++;
            left_cow_pos = stalls[i];
            if (count === n) {
                return true
            }
        }
    }
    return false;
}