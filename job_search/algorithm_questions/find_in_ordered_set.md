Suppose we had an array of n integers sorted in ascending order. How quickly could we check if a given integer is in the array?

```JavaScript
// Brute-force method:
const findInOrderedSet = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return true;
  }
  return false;
};

// test case
const arr = [1,2,3,4,5,6];

console.log(findInOrderedSet(arr, 4));
console.log(findInOrderedSet(arr, 8));

```
