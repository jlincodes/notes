Given two sorted arrays, write a function to merge the arrays into one sorted array.

```JavaScript
const mergeArrays = (arr1, arr2) => {
  const merged = [];
  let i = 0;
  let j = 0;
  let el1;
  let el2;

  while (i < arr1.length && j < arr2.length) {
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
