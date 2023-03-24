// You are given the root node of a binary tree A. You have to find the number of nodes in this tree.


class TreeNode {
    constructor(val, left=null, right=null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }
  const node11 = new TreeNode(11)
  const node10= new TreeNode(10, null, node11)
  const node8= new TreeNode(8, node10, null);
  const node9 = new TreeNode(9);
  const node4 = new TreeNode(4, node8, node9);
  const node5 = new TreeNode(5);
  const node6 = new TreeNode(6);
  const node7 = new TreeNode(7);
  const node2 = new TreeNode(2, node4, node5);
  const node3 = new TreeNode(3, node6, node7);
  const root = new TreeNode(1, node2, node3);


function countNodes(root) {
    if (!root) {
      return 0;
    }
    const leftCount = countNodes(root.left);
    const rightCount = countNodes(root.right);
    return 1 + leftCount + rightCount;
  }


  console.log(countNodes(root))