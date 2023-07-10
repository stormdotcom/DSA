// in the given BST, two node are swapped. Find the 2 nodes.
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);

        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }
}

// Example usage
const bst = new BST();
bst.insert(7);
bst.insert(2);
bst.insert(6);
bst.insert(1);
bst.insert(3);
bst.insert(5);
bst.insert(4);



function inorderTraversal(root) {
    const res = [];

    function traverse(node) {
        if (!node) {
            return;
        }
        traverse(node.left);
        res.push(node.value);
        traverse(node.right);
    }

    traverse(root);
    return res;
}

console.log(inorderTraversal(bst.root));