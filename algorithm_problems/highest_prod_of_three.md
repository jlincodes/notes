Given an array of integers, find the highest product you can get from three of the integers.

The input arrayOfInts will always have at least three integers.

```JavaScript
const highestProd = (arr) => {
  const sorted = arr.slice().sort( (a,b) => { return a - b; }).reverse();
  let highestPos = sorted[0];
  let highestNeg = sorted[0];

  let i = 1;
  let j = arr.length - 1;

  while (i <= 2) {
    highestPos *= sorted[i];
    highestNeg *= sorted[j];
    i++;
    j--;
  }

  return highestPos > highestNeg ? highestPos : highestNeg;
};
```

- Time Complexity: *O*(*n log n*), where *n* is the number of elements in the arr. Both `slice()` and `reverse()` perform *n* operations and `sort()` performs *n log n* operations.
- Space Complexity: *O*(*n*), where *n* is the number of elements in the input arr.
