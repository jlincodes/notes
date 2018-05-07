Suppose we had an array of n integers sorted in ascending order. How quickly could we check if a given integer is in the array?

```JavaScript
// Brute-force method:
// const findInOrderedSet = (arr, target) => {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === target) return true;
//   }
//   return false;
// };

// Optimized method with binary search:
// Iterative
const findInOrderedSet = (arr, target) => {
  // leftIdx & rightIdx act as "walls" that contain the indices
  // in which the target value exists.
  // initiate the walls to surround the entire array.
  let leftIdx = -1; // the index left of idx 0;
  let rightIdx = arr.length;

  while (leftIdx + 1 < rightIdx) {
    let range = rightIdx - leftIdx;
    let middleIdx = Math.floor(range/2);
    let guessIdx = leftIdx + middleIdx;
    let guessVal = arr[guessIdx];

    if (guessVal === target) return true;

    if (guessVal > target) {
      // target exists on the left half of the range, update the right "wall"
      rightIdx = guessIdx;
    } else {
      // target exists on the right half of the range, update the left "wall"
      leftIdx = guessIdx;
    }
  }
  return false;
};

// Recursive binary search:
const findInOrderedSet = (arr, target) => {
  if (arr.length === 0) return false;
  const midIdx = Math.floor(arr.length/2);
  const mid = arr[midIdx];
  if (mid === target) return true;
  if (mid > target) {
    return binarySearch(arr.slice(0, midIdx), target);
  } else {
    return binarySearch(arr.slice(midIdx + 1), target);
  }
};

// test case
const arr = [1,2,3,4,5,6];

console.log(findInOrderedSet(arr, 4));
console.log(findInOrderedSet(arr, 8));

```
