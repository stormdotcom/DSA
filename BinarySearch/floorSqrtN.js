//given n find the floor of sqrt of N;

const findFloor = (N) => {
    let low = 0, high = N;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if ((mid * mid) <= N && ((mid + 1) * (mid + 1) > N)) {
            return mid;
        }
        else if (mid * mid > N) { //the mid we are looking is not valid, which is greater than expected
            high = mid - 1;
        }
        else {
            low = mid + 1;
        }

    }
}