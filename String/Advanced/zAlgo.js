const zFunction = (s) => {
    let N = s.length;
    let z = new Array(N).fill(0);
    z[0] = -1;
    let r = 0, l = 0;
    for (let i = 1; i < N; i++) {
        if (i > r) {
            l = r = i;
            while (r < N && s[r] === s[r - l]) {
                r++;
            }
            z[i] = r - l;
            r--;
        }
        else {
            let k = i - l;
            if (z[k] < (r - i + 1)) {
                z[i] = z[k];
            }
            else {
                l = i;
                while (r < N && s[r] === s[r - l]) {
                    r++;
                }
                z[i] = r - l;
                r--;

            }
        }
    }
    return z;
}
//TC : O(n)
let str = "xxyaxxyazxxyaxxyaxz"

// The zFunction function takes a string s as input and returns an array z that represents the Z-values.
// It initializes some variables: N represents the length of the string, z is an array of zeros with the same length
// as the string, r and l are pointers that keep track of the rightmost position of a Z-box and its corresponding leftmost position.

// The loop starts from index 1 (since z[0] is set to -1) and iterates through the string.
// If i is greater than r, it means we are outside the current Z-box, so we need to find a new Z-box starting at position i.
// The pointers l and r are set to i, and we increment r as long as the characters at s[r] and s[r - l] are equal.
// The Z-value at index i is then computed as r - l, and r is decremented to remain inside the Z-box.

// If i is within the current Z-box (i <= r), we calculate the value of k as i - l. This represents the index relative to the current Z-box.
// If the Z-value at index k is less than the remaining length of the Z-box (r - i + 1), we can directly assign z[i] = z[k] since the Z-value at index k can be used as it is.

// If the Z-value at index k is greater than or equal to the remaining length of the Z-box,
// it means we need to find a new Z-box starting at position i.
//  We update l to i and increment r as long as the characters at s[r] and s[r - l] are equal.
// The Z-value at index i is then computed as r - l, and r is decremented to remain inside the Z-box.

// After the loop ends, the resulting array z contains the Z-values for each position in the input string.

// The Z-values represent the length of the longest substring starting from a particular position that is also a prefix of the string.
// It is commonly used for pattern matching and string similarity tasks.