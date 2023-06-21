class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.size = 0;
    }

    // Add an element to the top of the stack
    push(element) {
        const newNode = new Node(element);
        newNode.next = this.top;
        this.top = newNode;
        this.size++;
    }

    // Remove and return the topmost element from the stack
    pop() {
        if (this.isEmpty()) {
            return null;
        }
        const poppedElement = this.top.data;
        this.top = this.top.next;
        this.size--;
        return poppedElement;
    }

    // Return the topmost element without removing it from the stack
    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.top.data;
    }

    // Check if the stack is empty
    isEmpty() {
        return this.size === 0;
    }

    // Return the size of the stack
    getSize() {
        return this.size;
    }

    // Clear the stack
    clear() {
        this.top = null;
        this.size = 0;
    }
}


// Example usage:
// const stack = new Stack();
// stack.push(5);
// stack.push(10);
// stack.push(15);

// console.log(stack.peek()); // Output: 15

// console.log(stack.pop()); // Output: 15
// console.log(stack.pop()); // Output: 10

// console.log(stack.getSize()); // Output: 1

// console.log(stack.isEmpty()); // Output: false

// stack.clear();
// console.log(stack.isEmpty()); // Output: true

export default Stack;