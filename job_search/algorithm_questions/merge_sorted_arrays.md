## Merge Sorted Arrays
Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

Note:
You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2. The number of elements initialized in nums1 and nums2 are m and n respectively.

```Ruby
def merge(nums1, m, nums2, n)
  return nums1 if n == 0
  i = 0
  j = 0
  m.times do
    if nums1[0] > nums2[0]
      nums1.insert(i, nums[2])
      i += 1
      j += 1
    else
      i += 1
    end
  end
end
```

- **Time Complexity**:
- **Space Complexity**:


**Source: **
