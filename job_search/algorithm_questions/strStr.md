## strStr

Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

```JavaScript
var strStr = function(haystack, needle) {
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    if (haystack.substr(i, needle.length) === needle) return i;
  }
  return -1;
};
```
