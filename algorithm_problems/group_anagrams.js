// given an array of strings, return the strings grouped by anagrams.
// ['cat', 'dog', 'act', 'tac', 'god', 'cars', 'scar', 'foobar']
// => [
//   ['cat', 'act', 'tac'],
//   ['dog', 'god'],
//   ['cars', 'scar'],
//   ['foobar']
// ]

const groupAnagrams = (arr) => {
  const groups = {};

  arr.forEach( word => {
    const sorted = word.split('').sort().join('');
    !groups[sorted] ? groups[sorted] = [word] : groups[sorted].push(word);
  });

  return Object.values(groups);
};

console.log(groupAnagrams(['cat', 'dog', 'act', 'tac', 'god', 'cars', 'scar', 'foobar']));


/*
Time complexity: O(n + m), where n is the number of elements in the
array and m is the number of property/value pairs in the hash table.
Space complexity: O(m), where m is the number of property/value pairs
in the hash table object.
*/
