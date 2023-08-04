// insert  word

function InsetWord(root, word) {
    let curr = root;
    let N = word.length;
    for (let i = 0; i < N; i++) {
        let index = word.charCodeAt(i) - "a".charCodeAt(0);
        if (!curr.child[index]) {
            curr.child[index] = new Node()
        };
        curr = curr.child[index];
    }
    curr.isEnd = true;
}

class Node {
    constructor() {
        // Each node will have an array to store its children nodes.
        this.children = new Array(26).fill(null); // Assuming the words only contain lowercase letters.
        this.isEnd = false; // A boolean flag to mark the end of a word.
    }
}