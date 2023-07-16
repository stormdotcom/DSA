// check if the given binary tree has root to leaf path
// sum equal to K

function checkPath(root, sum, k) {
    if (root === null) return false;
    let s = sum + root.value;
    if (root.left === null && root.right === null) {
        return (k === sum);
    }
    return checkPath(root.left, s, k) || checkPath(root.right, s, k);
};
