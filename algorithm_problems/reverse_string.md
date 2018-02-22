Write a method to reverse a string in-place.

```Ruby
def reverse_str(str)
  i = 0
  j = str.length - 1
  while i < j
    str[i], str[j] = str[j], str[i]
    i += 1
    j -= 1
  end

  str
end

# test cases:
p reverse_str('abcdef') # => 'fedcba'
p reverse_str('abcdefg') # => 'gfedcba'
```

- Time Complexity: O(n) where *n* is the number of characters in the string.
- Space Complexity: O(1) constant extra space.
