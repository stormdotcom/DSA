function levelOrderTraversal(root) {
    if (!root) return []; // Empty tree

    const queue = new Queue();
    queue.enqueue(root);

    const result = []; // Array of arrays

    while (!queue.isEmpty()) {
        const levelSize = queue.size(); // Get the number of nodes in the current level
        const levelNodes = []; // Array to store the nodes in the current level

        for (let i = 0; i < levelSize; i++) {
            const node = queue.dequeue();

            levelNodes.push(node.value);

            if (node.left) {
                queue.enqueue(node.left);
            }

            if (node.right) {
                queue.enqueue(node.right);
            }
        }

        result.push(levelNodes); // Insert the nodes of the current level into the result array
    }

    return result;
}