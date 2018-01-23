## Stack Min
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

- `push(x)` -- Push element x onto stack.
- `pop()` -- Removes the element on top of the stack.
- `top()` -- Get the top element.
- `getMin()` -- Retrieve the minimum element in the stack.


### JS Solution

```JavaScript
 // initializes data structure
var MinStack = function() {
  this.minStack = [];
  this.container = [];
};

// param {number}
// returns {void}
MinStack.prototype.push = function(x) {
  this.container.push(x);
  if (this.minStack.length === 0 || x <= this.minStack[this.minStack.length - 1]) {
    this.minStack.push(x);
  }
};

 // returns {void}
MinStack.prototype.pop = function() {
  let x = this.container.pop();
  if (x === this.minStack[this.minStack.length - 1]) {
    this.minStack.pop();
  }
};


// returns {number}
MinStack.prototype.top = function() {
  return this.container[this.container.length - 1];
};

 // returns {number}
MinStack.prototype.getMin = function() {
  return this.minStack[this.minStack.length - 1];
};
```

### ES6 JS Solution

```JavaScript
class MinStack {
  constructor() {
    this.minStack = [];
    this.container = [];
  }

  push(x) {
    this.container.push(x);
    if (this.minStack.length === 0 || x <= this.minStack[this.minStack.length - 1]) {
      this.minStack.push(x);
    }
  }

  pop() {
    let x = this.container.pop();
    if (x === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }
  }

  top() {
    return this.container[this.container.length - 1];
  }

  getMin() {
    return this.minStack[this.minStack.length - 1]
  }
}
```
