## strStr

Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

```JavaScript
const strStr = (haystack, needle) => {
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    if (haystack.substr(i, needle.length) === needle) return i;
  }
  return -1;
};
```
