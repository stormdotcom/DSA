function invertTree(root) {
    if (root === null) {
        return null;
    }

    // Swap left and right subtrees
    const temp = root.left;
    root.left = root.right;
    root.right = temp;

    // Recursively invert left and right subtrees
    invertTree(root.left);
    invertTree(root.right);

    return root;
}