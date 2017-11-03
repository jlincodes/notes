# Functional Programming

## Why should you care?
- understandable code
- parallelizable

## What is function programming?
- a style of programming in which pure function are the main unit of computation
- Think jQuery vs React
- Possible in most languages, but easier in some languages

## What makes a function pure?
- no side effects
  - ajax requests, writing to db, printing, changing external state
- same input => same output each time the function is run

### Purity requires immutability

### How can we do anything useful?
- functional core, imperative shell
- Redux
  - model state changes as pure reducers
  - your code never mutates state
- React
  - model UI as pure components
  - your code never mutates DOM

## Understandable
```JavaScript
const x = impureThing(a,b);
const x = pureThing(a,b);
```
- impure functions have hidden inputs and outputs
- hidden inputs: mutable dependencies
hidden outputs: side effects
- impure functions are often couples in invisible ways
- pure functions require all inputs/outputs to be explicit
calling a pure function can never break other - values that change over time are difficult to keep track of

## Parallelizable
- can't parallelize if we don't understand dependencies between steps
- mutable variables
```JavaScript
let count = 5;
const increment = () => {
  count = count + 1;
};

const doubles = (arr) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    ...
  }
  return result;
}

const doubles = (arr) => {
  return arr.map(x => x * 2);
}
```

## Apache Spark
- "fast and general engine for large-scale data processing"
- supports python, java, scala
- resilient distributed dataset (RDD)
- think of a RDD as an array

## Why doesn't everyone do this?
- Functional programming has been around since the 50's, but it's mostly limited to academia.
- historical limitations in memory
- parallelism only needed recently
- entrenched in education and language design
- doesn't always align with real world perception
- but things are changing!

## What's next
- JavaScript
  - Brian Lonsdorf
    - Oh Composable World
    - Egghead series
  - Immutable.js
  - Elm

### Appendix: Performance

### Lazy evaluation
- doing work at the laziest

### Memoization
