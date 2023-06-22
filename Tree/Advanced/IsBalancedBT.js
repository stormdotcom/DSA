
function isBalanced(root) {
    let isBalanced = true;

    function findHeight(node) {
        if (!node) {
            return 0;
        }
        const leftHeight = findHeight(node.left);
        const rightHeight = findHeight(node.right);
        if (Math.abs(leftHeight - rightHeight) > 1) {
            isBalanced = false;
        }
        return Math.max(leftHeight, rightHeight) + 1;
    }

    findHeight(root);
    return isBalanced;
}

const tree = {
    value: 1,
    left: {
        value: 2,
        left: {
            value: 4,
            left: null,
            right: null
        },
        right: null
    },
    right: {
        value: 3,
        left: null,
        right: null
    }
};

console.log(isBalanced(tree)); // Output: true