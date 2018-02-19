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

console.log(fib(4));

```
- Time Complexity: O(n)
- Space Complexity: O(n)

```JavaScript
const fib = (n) => {

};
```
