class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
    }

    enqueue(element) {
        const newNode = new Node(element); // add to the end

        if (this.isEmpty()) {
            this.front = newNode;
            this.rear = newNode;
        } else {
            this.rear.next = newNode;
            this.rear = newNode;
        }
    }

    front() {
        if (this.isEmpty()) {
            return "No elements in the queue";
        }
        return this.front.data;
    }

    dequeue() {
        if (this.isEmpty()) {
            return "Underflow";
        }

        const dequeuedItem = this.front.data;
        this.front = this.front.next;

        if (this.isEmpty()) {
            this.rear = null;
        }

        return dequeuedItem;
    }

    isEmpty() {
        return this.front === null;
    }

    size() {
        let count = 0;
        let currentNode = this.front;

        while (currentNode !== null) {
            count++;
            currentNode = currentNode.next;
        }

        return count;
    }
}