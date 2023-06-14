class Stack {
    constructor() {
        this.stack = [];
    }

    // Add an element to the top of the stack
    push(element) {
        this.stack.push(element);
    }

    // Remove and return the topmost element from the stack
    pop() {
        if (this.isEmpty()) {
            return null;
        }
        return this.stack.pop();
    }

    // Return the topmost element without removing it from the stack
    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.stack[this.stack.length - 1];
    }

    // Check if the stack is empty
    isEmpty() {
        return this.stack.length === 0;
    }

    // Return the size of the stack
    size() {
        return this.stack.length;
    }

    // Clear the stack
    clear() {
        this.stack = [];
    }
}
export default Stack;

