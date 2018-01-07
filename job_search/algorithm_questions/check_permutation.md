## Check Permutation
Given two strings, write a method to decides if one is a permutation of the other.

```Ruby
def permutation(str1, str2)
  # Sort the strings, then compare

  return false if str1.length != str2.length

  # sorted1 = str1.chars.sort.join.downcase
  # sorted2 = str2.chars.sort.join.downcase
  # sorted1 == sorted2

  # Hash method
  hash = Hash.new { |h,k| h[k] = 0 }
  i = 0

  while i < str1.length
    hash[str1[i]] += 1
    i += 1
  end

  j = 0
  while j < str2.length
    hash[str2[j]] -= 1
    if hash[str2[j]] < 0
      return false
    end
    j += 1
  end

  return true

end

permutation('dog', 'god')
permutation('dog', 'God')

```

```JavaScript
const checkPermutation = (str1, str2) => {
  // const sorted1 = str1.split('').sort().join('').toLowerCase();
  // const sorted2 = str2.split('').sort().join('').toLowerCase();
  // return sorted1 === sorted2 ? true : false;

  if (str1.length() !== str2.length()) return false;

  const hash = {};

  for (let i = 0; i < str1.length(); i++) {
    hash[str1[i]]++;
  }

  for (let j = 0; j < str1.length(); j++) {
    hash[str2[j]]--;
    if (hash[str2[j]] < 0) return false;
  }

  return true;
};
```
