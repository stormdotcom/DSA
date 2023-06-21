// implementation of tree  post-order traversal using stack
import Stack from "../../Stack/stackLL.js";

const solve = (root) => {
    let stack = new Stack();
    let current = root;
    let result = [];

    while (current !== null || !stack.isEmpty()) {
        if (current !== null) {
            stack.push(current);
            current = current.left;
        } else {
            let temp = stack.top().right;
            if (temp === null) {
                temp = stack.pop();
                result.push(temp.value);

                while (!stack.isEmpty() && temp === stack.top().right) {
                    temp = stack.pop();
                    result.push(temp.value);
                }
            } else {
                current = temp;
            }
        }
    }

    return result;
};

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Create the binary tree
const rootNode = new Node(1);
rootNode.left = new Node(2);
rootNode.right = new Node(3);
rootNode.left.left = new Node(4);
rootNode.left.right = new Node(5);
rootNode.right.left = new Node(6);
rootNode.right.right = new Node(7);

console.log(solve(rootNode));
