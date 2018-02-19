Write a function fib() that a takes an integer n and returns the nth Fibonacci number.

Let's say our Fibonacci series is 0-indexed and starts with 0. So:
```JavaScript
fib(0);  // => 0
fib(1);  // => 1
fib(2);  // => 1
fib(3);  // => 2
fib(4);  // => 3
// ...
```

Naive Approach:
```JavaScript
const fib = (n) => {
  if (n === 0 || n === 1) {
    return n;
  } else if (n < 0) {
    throw new Error('n must be a positive index');
  }
  const fibs = [];
  for (let i = 0; i <= n; i++) {
    if (i === 0 || i === 1) {
      fibs.push(i);
    } else {
      fibs.push(fibs[i - 2] + fibs[i - 1]);
    }
  }
  return fibs[n];
};
```
- Time Complexity: O(n)
- Space Complexity: O(n)

```JavaScript
const fib = (n) => {
  if (n === 0 || n === 1) {
    return n;
  } else if (n < 0) {
    throw new Error('n must be a positive index');
  }

  let prevPrev = 0;
  let prev = 1;
  let current;

  for (let i = 2; i <= n; i ++) {
    current = prevPrev + prev;
    prevPrev = prev;
    prev = current;
  }

  return current;
};
```
- Time Complexity: O(n)
- Space Complexity: O(1)
