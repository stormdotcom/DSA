// Given a binary tree, return the inOrder traversal of its nodes' values.

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const node4 = new TreeNode(4);
const node5 = new TreeNode(5);
const node6 = new TreeNode(6);
const node7 = new TreeNode(7);
const node2 = new TreeNode(2, node4, node5);
const node3 = new TreeNode(3, node6, node7);
const root = new TreeNode(1, node2, node3);

//     1
//    / \
//   2   3
//  / \ / \
// 4  5 6  7


function inOrderTraversal(root) {
  const res = [];

  function traverse(node) {
    if (!node) {
      return;
    }
    traverse(node.left);
    res.push(node.val);
    traverse(node.right);
  }

  traverse(root);
  return res;
}

console.log(inOrderTraversal(root))