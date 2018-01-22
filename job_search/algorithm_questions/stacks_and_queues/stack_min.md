## Stack Min
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

`push(x)` -- Push element x onto stack.
`pop()` -- Removes the element on top of the stack.
`top()` -- Get the top element.
`getMin()` -- Retrieve the minimum element in the stack.

```JavaScript
/**
 * initialize your data structure here.
 */

var MinStack = function() {
    this.minStack = [];
    this.container = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.container.push(x);
    if (this.minStack.length === 0 || x <= this.minStack[this.minStack.length - 1]) {
        this.minStack.push(x);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let x = this.container.pop();
    if (x === this.minStack[this.minStack.length - 1]) {
        this.minStack.pop();
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.container[this.container.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minStack[this.minStack.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
```
