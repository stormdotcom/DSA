// Delete  word
// using stack 
// insert all the character in stack

class Node {
    constructor() {
        this.children = new Array(26).fill(null); // Assuming the words only contain lowercase letters.
        this.isEnd = false;
    }
}

function deleteWord(root, word) {
    const stack = [];
    let curr = root;
    const N = word.length;

    // Push characters onto the stack
    for (let i = 0; i < N; i++) {
        const index = word.charCodeAt(i) - "a".charCodeAt(0);
        stack.push({ node: curr, charIndex: index });
        if (!curr.children[index]) {
            // If the word doesn't exist in the trie, return the original root.
            return root;
        }
        curr = curr.children[index];
    }

    // Traverse the trie backward and delete nodes if necessary
    while (stack.length > 0) {
        const { node, charIndex } = stack.pop();

        // Mark the end of the word as false if we are at the end of the word
        if (charIndex === word.charCodeAt(N - 1) - "a".charCodeAt(0)) {
            node.isEnd = false;
        }

        // Check if the node can be safely removed
        if (node.isEnd || node.children.some(child => child !== null)) {
            break; // Stop traversing if the node can't be deleted
        }

        // Otherwise, remove the node from its parent
        const parentIndex = stack[stack.length - 1].charIndex;
        stack[stack.length - 1].node.children[parentIndex] = null;
    }

    return root;
}
