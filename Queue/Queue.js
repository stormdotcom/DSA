class Queue {
    constructor() {
        this.queue = []
    }
    enqueue(val) {
        this.queue.push(val)
    }
    front() {
        if (this.isEmpty()) {
            return -1;
        }
        return this.queue[0];
    }
    dequeue() {
        if (this.isEmpty()) {
            return -1;
        }
        this.queue.shift()
        return this.queue;
    }
    isEmpty() {
        return this.queue.length === 0;
    }
    size() {
        return this.queue.length;
    }
}