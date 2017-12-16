## Reverse Integer

Given a 32-bit signed integer, reverse digits of an integer.

Example 1:
```
Input: 123
Output:  321
```

Example 2:
```
Input: -123
Output: -321
```
Example 3:
```
Input: 120
Output: 21
```
Note:
Assume we are dealing with an environment which could only hold integers within the 32-bit signed integer range. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.



```Ruby
def reverse(x)
  arr = x.to_s.chars.reverse
  results = []

  arr.each_with_index do |el, idx|
    next if el == '0' && idx == -1
    results.insert(0, el) if el == '-'
    results << el
  end    

  results = results.join("").to_i

  results > 2147483647 || results < -2147483648 ? 0 : results
end
```

Source: [Leetcode](https://leetcode.com/problems/delete-node-in-a-linked-list/solution/)
