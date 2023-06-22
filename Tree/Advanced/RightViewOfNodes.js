

function rightView(root) {
    if (!root) return []; // Empty tree

    const queue = new Queue();
    queue.enqueue(root);

    const result = [];

    while (!queue.isEmpty()) {
        const levelSize = queue.size();
        const levelNodes = [];

        for (let i = 0; i < levelSize; i++) {
            const node = queue.dequeue();

            if (i === levelSize - 1) {
                levelNodes.push(node.value);
            }

            if (node.left) {
                queue.enqueue(node.left);
            }

            if (node.right) {
                queue.enqueue(node.right);
            }
        }

        result.push(levelNodes);
    }

    return result;
}