// To find the path from the root to a specific node k in any type of tree using recursion, 
// you can traverse the tree recursively while keeping track of the path
const findPath = (root, k) => {
    let stack = [];
    let ans = [];
    let end = false;

    const find = (node, k) => {
        if (node === null) return;
        stack.push(node.val);
        if (node.val === k) {
            ans = [...stack]; // store the path from stack to the ans array
            end = true;
            return;
        }
        if (!end) {
            find(node.left, k);
        }
        if (!end) {
            find(node.right, k);
        }
        stack.pop(); // backtrack by removing the current node from stack
    };

    find(root, k);

    return ans;
};

// Example usage
class TreeNode {
    constructor(value) {
        this.val = value;
        this.left = null;
        this.right = null;
    }
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

const k = 7;
const path = findPath(root, k);
