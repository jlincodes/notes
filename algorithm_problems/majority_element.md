Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.

```JavaScript
const majorityElement = (nums) => {
  const counts = {};

  nums.forEach( el => {
   counts[el] ? counts[el] += 1 : counts[el] = 1;
  });

  let majority = nums[0];

  for (let prop in counts) {
    if (counts[prop] >= counts[majority]) {
      majority = prop;
    }
  }

  return Number.parseInt(majority);
};
```

- Time Complexity: O(n + m), *n* representing the number of elements in the input array and *m* representing the number of properties (or number of unique elements in the input array) in the hash table object
- Space Complexity: O(m) extra space.
