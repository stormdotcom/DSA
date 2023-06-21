import Queue from "../../Queue/QueueLL.js";

function levelOrderTraversal(root) {
    if (!root) return; // Empty tree

    const queue = new Queue();

    while (!queue.isEmpty()) {
        const node = queue.dequeue(); // Dequeue the front node

        console.log(node.value); // Process the node

        if (node.left) {
            queue.push(node.left); // Enqueue left child
        }

        if (node.right) {
            queue.push(node.right); // Enqueue right child
        }
    }
}