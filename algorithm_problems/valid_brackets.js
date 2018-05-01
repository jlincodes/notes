// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
//
// An input string is valid if:
//
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.
//
// Example 1:
//
// Input: "()"
// Output: true
// Example 2:
//
// Input: "()[]{}"
// Output: true
// Example 3:
//
// Input: "(]"
// Output: false
// Example 4:
//
// Input: "([)]"
// Output: false
// Example 5:
//
// Input: "{[]}"
// Output: true

class myStack {
  constructor() {
    this.stack = [];
  }

  push(el) {
    this.stack.push(el);
    // returning `this` to return the stack object instead of the stack array
    // which will prevent the stack order from being modified
    return this;
  }

  pop() {
    this.stack.pop();
  }

  // looks at the last element that was added to the stack
  peek() {
    return this.stack[this.stack.length - 1];
  }

  size() {
    return this.stack.length;
  }
}

const isValid = s => {
  if (s.length % 2 === 1) return false;

  const pairs = {
    "(":")",
    "[":"]",
    "{":"}"
  };
  const newStack = new myStack();

  for (let i = 0; i < s.length; i++) {
    const temp = s[i];
    if (pairs.hasOwnProperty(temp)) {
      newStack.push(temp);
    } else {
      if (temp !== pairs[newStack.peek()]) {
        return false;
      } else {
        newStack.pop();
      }
    }
  }
  return newStack.size() === 0 ? true : false;
};
