## Check Permutation
Given two strings, write a method to decides if one is a permutation of the other.

```Ruby
def permutation(str1, str2)
  # Sort the strings, then compare

  sorted1 = str1.chars.sort.join.downcase
  sorted2 = str2.chars.sort.join.downcase
  sorted1 == sorted2

end
```

```JavaScript
```
