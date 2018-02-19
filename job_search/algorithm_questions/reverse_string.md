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
