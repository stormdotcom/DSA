// Insert node into BST
// Binary tree node definition
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Function to insert a value into a binary search tree
function insertNode(root, value) {
    if (root === null) {
        return new Node(value); // Create a new node if the tree is empty
    }

    if (value < root.value) {
        // If the value is less than the current node's value, go to the left subtree
        root.left = insertNode(root.left, value);
    } else if (value > root.value) {
        // If the value is greater than the current node's value, go to the right subtree
        root.right = insertNode(root.right, value);
    }

    return root; // Return the root node after insertion
}
let root = null;

root = insertNode(root, 50);
root = insertNode(root, 30);
root = insertNode(root, 70);
root = insertNode(root, 20);
root = insertNode(root, 40);
root = insertNode(root, 60);
root = insertNode(root, 80);

