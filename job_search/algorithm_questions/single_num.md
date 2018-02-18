## Single Number
Given an array of integers, every element appears twice except for one. Find that single one.

Note:
Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

### JavaScript solution with O(n) time and space complexities
```JavaScript
const singleNum = (nums) => {
  const hash = {};

  nums.forEach( num => {
    if (hash[num]) {
      hash[num] += 1;
    } else {
      hash[num] = 1;
    }
  });

  for (let prop in hash) {
    if (hash[prop] === 1) {
      return parseInt(prop);
    }
  }
};
```
Time Complexity: **O(n)**
Space Complexity: **O(n)**

```JavaScript
const singleNum = (nums) => {
  let result = 0;

  for (let i = 0; i < nums.length; i ++) {
    result ^= nums[i];
  }

    return result;
};
```

Time Complexity: **O(n)**
Space Complexity: **O(1)**

[Source](link)
