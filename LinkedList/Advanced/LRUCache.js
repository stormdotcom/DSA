class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.size = 0;
        this.head = null;
        this.tail = null;
        this.cache = new Map();
    }
    usage() {
        let result = (this.size / this.capacity) * 100
        console.log("Current Cache usage is :", result, "%")
    }
    get(key) {
        if (this.cache.has(key)) {
            const node = this.cache.get(key);
            this.moveToHead(node);
            return node.value;
        }
        return -1; // Key not found
    }

    put(key, value) {
        if (this.cache.has(key)) {
            const node = this.cache.get(key);
            node.value = value;
            this.moveToHead(node);
        } else {
            const newNode = new Node(key, value);
            this.cache.set(key, newNode);
            this.addToHead(newNode);
            this.size++;

            if (this.size > this.capacity) {
                const removedNode = this.removeTail();
                this.cache.delete(removedNode.key);
                this.size--;
            }
        }
    }

    addToHead(node) {
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
    }

    removeNode(node) {
        if (node === this.head) {
            this.head = node.next;
        } else if (node === this.tail) {
            this.tail = node.prev;
        } else {
            node.prev.next = node.next;
            node.next.prev = node.prev;
        }
    }

    moveToHead(node) {
        this.removeNode(node);
        this.addToHead(node);
    }

    removeTail() {
        const removedNode = this.tail;
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        return removedNode;
    }
}
const cache = new LRUCache(3);
cache.put("key1", "value1"); // Add key-value pair to the cache
cache.put("key2", "value2");
cache.put("key3", "value3");


const value1 = cache.get("key1");
console.log(value1);
const value2 = cache.get("key2");
console.log(value2);
const value3 = cache.get("key3");
console.log(value3);
const value4 = cache.get("key4");
console.log(value4); // Output: -1

cache.usage()
cache.put("key4", "value4");
const value1AfterEviction = cache.get("key1");
console.log(value1AfterEviction); // Output: -1 (Evicted key1)
