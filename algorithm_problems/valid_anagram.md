## Valid Anagram
Given two strings s and t, write a function to determine if t is an anagram of s.

For example,
s = "anagram", t = "nagaram", return true.
s = "rat", t = "car", return false.

Note:
You may assume the string contains only lowercase alphabets.

Follow up:
What if the inputs contain unicode characters? How would you adapt your solution to such case?

```Ruby
def is_anagram(s, t)
    return false if s.length != t.length
    return true if s.length == 0 && t.length == 0

    hash = {}

    s.each_char do |char|
        if hash[char]
            hash[char] += 1
        else
            hash[char] = 1
        end
    end

    t.each_char do |char|
        return false if !hash[char]
        hash[char] -= 1
    end

    hash.each_value do |v|
        return false if v != 0
    end

    return true
end
```


- Time Complexity: *O*(*n*)
- Space Complexity: *O*(*n*)

[Source](link)
