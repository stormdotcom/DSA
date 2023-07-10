// Search for a node in BST. you are given root, k =17

const search = (root, k) => {
    let curr = root;
    while (curr !== null) {
        if (curr.data === k) {
            return true;
        }
        else if (curr.value > k) {
            curr = curr.left;
        }
        else {
            curr = curr.right;
        }
    }
    return false;
};

