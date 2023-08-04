// search word

function search(root, word) {
    let curr = root;
    let N = word.length;
    for (let i = 0; i < N; i++) {
        let index = word.charCodeAt(i) - "a".charCodeAt(0);
        if (!curr.child[index]) return false;
        curr = curr.child[index];
    }
    return curr.isEnd;
}