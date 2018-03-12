#### Two Sum
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Brute Force - Ruby:
```Ruby
def two_sum(arr, target)
  arr.each_with_index do |i, idx1|
    arr.each_with_index do |j, idx2|
      next if idx1 == idx2
      return [idx1, idx2] if (i+j) == target
    end
  end
end
```

Brute Force - JavaScript (1):
```JavaScript
const twoSum = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (arr[j] === target - arr[i]) {
        return [i,j]
      }
    }
  }
};
```
Brute Force - JavaScript (2):
```JavaScript
const twoSum = (nums, target) => {
  const indices = [];
  for (let i = 0; i < nums.length; i++) {
    let temp = target - nums[i];
    let idx = nums.indexOf(temp);
    if (nums.includes(temp) && i !== idx) {
      indices.push(i, idk);
      return indices;
    }
  }
};
```
- Time complexity - O(n<sup>2</sup>)
- Space complexity - O(1)

Two-Pass Hash Method - Ruby:
```Ruby
def two_sum(arr, target)
  hash = {}
  arr.each_with_index do |i, idx|
    hash[i] = idx
  end

  arr.each_with_index do |i, idx1|
    idx2 = hash[target-i]
    if idx2 != nil && idx1 != idx2
      return [idx1, idx2]
    end
  end
end
```

Two-Pass Hash Method - JavaScript:
```JavaScript
const twoSum = (nums, target) => {
  let numHash = {};

  nums.forEach( (num, idx) => numHash[num] = idx );

  for (let i = 0; i < nums.length; i++) {
    let temp = (target - nums[i]).toString();
    if (numHash[temp]) {
        return [i, numHash[temp]];
    }
  }
};
```

- Time complexity - O(n)
- Space complexity - O(1)
