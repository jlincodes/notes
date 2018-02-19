Write an efficient function that checks whether any permutation of an input string is a palindrome.

Semi-Naive Approach:
```JavaScript
const permutationPalindrome = (str) => {
  const hash = {};
  for (let i = 0; i < str.length; i++) {
    if (hash[str[i]]) {
      hash[str[i]] += 1;
    } else {
      hash[str[i]] = 1;
    }
  }

  let odds = 0;
  for (let prop in hash) {
    if (hash[prop] % 2 > 0) {
      odds++;
    }
  }

  return odds > 1 ? false : true;
};
```
