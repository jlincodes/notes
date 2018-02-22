Given two sorted arrays, write a function to merge the arrays into one sorted array.

```JavaScript
const mergeArrays = (arr1, arr2) => {
  return arr1.concat(arr2).sort((a,b) => {return a - b;});
};
```

- Time Complexity: *O*(*n log n*), where *n* is the total length of the output array.
- Space Complexity: *O*(*n*), where *n* is the length of our output array.

```JavaScript
const mergeArrays = (arr1, arr2) => {
  const merged = [];
  let i = 0;
  let j = 0;
  let el1;
  let el2;

  while (i < arr1.length || j < arr2.length) {
    el1 = arr1[i];
    el2 = arr2[j];

    if (el1 < el2) {
      merged.push(el1);
      i++;
    } else {
      merged.push(el2);
      j++;
    }
  }
  return merged;
};
```

- Time Complexity: *O*(*n*), where *n* is the total number of elements of both input arrays.
- Space Complexity: *O*(*n*), where *n* is the number of elements in the output array.
