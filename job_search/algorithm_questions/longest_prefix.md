## Longest Common Prefix
Write a function to find the longest common prefix string amongst an array of strings.

```JavaScript

const longestCommonPrefix = function(strs) {
  // return empty string if strs is an empty array
  if (strs.length === 0) return '';
  if (strs.length === 1) return strs[0];

  for (let i = 0; i < strs[0].length; i++) {
    let c = strs[0].charAt(i);
    if (strs.some(str => str.charAt(i) !== c || i === str.length)) {
      return strs[0].slice(0, i);
    }
    // Alternative: use a second loop - functionally the same
    // for (let j = 1; j < strs.length; j++) {
    //  if (i === strs[j].length || c != strs[j].charAt[i]) {
    //    return strs[0].slice(0,i);
    //   }
    // }
  }
  return strs[0];
};
```

- Time complexity: **O(S)**, where **S** is the sum of all the characters in all the strings. Worst case: there will be **n** equal strings with length **m** and the algorithm performs **S = m * n** character comparisons. Best case, there are at most **n * minLen** comparisons, where **minLen** is the length of the shortest string in the array.
- Space Complexity: **O(1)** constant extra space.
