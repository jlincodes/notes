#### Remove Element
Given an array and a value, remove all instances of that value from the array <b>in-place</b> and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

The order of elements can be changed. It doesn't matter what you leave beyond the new length.
```Ruby
def remove_element(nums, val)
  i = 0
  nums.each_index do |j|
    if nums[j] != val
        nums [i] = nums[j]
        i += 1
    end
  end
  return i
end
```
- Time complexity - O(n). <i>n</i> is the length of the array and <i>j</i> traverses the array <i>n</i> times.
- Space complexity - O(1)
