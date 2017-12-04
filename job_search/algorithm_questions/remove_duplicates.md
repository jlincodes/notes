#### Remove Duplicates:
Given a sorted array, remove the duplicates in-place such that each element appear only once and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

```Ruby
def remove_duplicates(nums)
  return 0 if nums.length == 0
  i = 0
  (1...nums.length).each do |j|
      if nums[j] != nums[i]
          i += 1
          nums[i] = nums[j]
      end
  end
  return i + 1
end
```
- Time complexity - O(n). <i>n</i> is the length of the array and <i>j</i> traverses the array <i>n</i> times.
- Space complexity - O(1)
