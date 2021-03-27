// Your implementation goes here
// Your implementation goes here

// Did not want to use the native push and pop array method.
// I used other methods to acheive same behaviour
class Stack {

    constructor() {
        this.stack = Object.values(arguments)
        this.count = Object.values(arguments).length;
    }

    // Add element to top of stack
    push(element) {
        // insert element into the stack
        // this is the equivalent of this.stack.push(element)
        this.stack[this.count] = element
        this.count += 1
        // returns the size of the stack
        return this.count
    }

    // remove top element in stack and return stack
    // return undefined if stack is empty
    pop() {
        // If stack is empty return undefined
        if (this.count === 0) return null
        // get the item to be removed from the stack
        let deleteItem = this.stack[this.count - 1]
        // remove item from the stack.
        // this is the equivalent of this.stack.pop()
        this.stack = this.stack.slice(0, this.count - 1);
        this.count -= 1
        // return deleted item
        return deleteItem
    }

    // Check top element in stack
    peek() {
        // returns undefined if stack is empty
        return this.stack[this.count - 1]
    }

    // Check if stack is empty
    isEmpty() {
        return this.count === 0
    }

    // Check size of stack
    get size() {
        return this.count
    }
    swap() {
        // cannot swap if content is less than 2
        // so the current stack is returned to the user
        if (this.count < 2) return this.stack;
        [
            this.stack[this.count - 1],
            this.stack[this.count - 2]
        ] = [
                this.stack[this.count - 2],
                this.stack[this.count - 1]
            ]
            // returns the swapped stacked
        return this.stack
    }
  }

  module.exports = Stack;
