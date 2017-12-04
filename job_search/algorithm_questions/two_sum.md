#### Two Sum
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Brute Force Method:
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
- Time complexity - O(n<sup>2</sup>)
- Space complexity - O(1)

Two-Pass Hash Method:
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
- Time complexity - O(n)
- Space complexity - O(1)
