// Given the in-order and post order traversal of a tree construct the 
// binary tree. All values are distinct

function TreeNode(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}

const buildTree = (inorder, postorder) => {
    if (inorder.length === 0 || postorder.length === 0) {
        return null;
    }

    const rootVal = postorder[postorder.length - 1];
    const root = new TreeNode(rootVal);

    const rootIndex = inorder.indexOf(rootVal);

    const leftInorder = inorder.slice(0, rootIndex);
    const rightInorder = inorder.slice(rootIndex + 1);
    const leftPostorder = postorder.slice(0, rootIndex);
    const rightPostorder = postorder.slice(rootIndex, postorder.length - 1);

    root.left = buildTree(leftInorder, leftPostorder);
    root.right = buildTree(rightInorder, rightPostorder);

    return root;
};

// Example 1:
const inorder1 = [2, 1, 3];
const postorder1 = [2, 3, 1];

const tree1 = buildTree(inorder1, postorder1);
console.log(tree1);

// Example 2:
const inorder2 = [6, 1, 3, 2];
const postorder2 = [6, 3, 2, 1];

const tree2 = buildTree(inorder2, postorder2);
console.log(tree2);
