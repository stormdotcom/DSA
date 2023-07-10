// given BT check BST or NOT?

const isValid = (root, min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER) => {
    if (root === null) {
        return true;
    }

    if (root.data < min || root.data > max) {
        return false;
    }

    return (
        isValid(root.left, min, root.data - 1) &&
        isValid(root.right, root.data + 1, max)
    );
};
