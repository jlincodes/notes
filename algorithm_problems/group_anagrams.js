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
