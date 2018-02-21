Let's say:

'(', '{', '[' are called "openers."
')', '}', ']' are called "closers."

Write an efficient function that tells us whether or not an input string's openers and closers are properly nested.

Examples:

`"{ [ ] ( ) }"` should return `true`
`"{ [ ( ] ) }"` should return `false`
`"{ [ }"` should return `false`

```JavaScript
const hasValidBrackets = (str) => {
  const bracketPairs = {
    '(': ')',
    '{': '}',
    '[': ']'
  };

  const openers = new Set(['(', '{', '[']);
  const closers = new Set([')', '}', ']']);

  const seen = [];
  let lastSeen;
  let char;

  for (let i = 0; i < str.length; i++) {
    char = str.charAt(i);
    if (openers.has(char)) {
      seen.push(char);
    } else if (closers.has(char)) {
      if (!seen.length) {
        return false;
      } else {
        lastSeen = seen.pop();
        if (bracketPairs[lastSeen] !== char) {
          return false;
        }
      }
    }
  }
  return seen.length === 0;
};
```
