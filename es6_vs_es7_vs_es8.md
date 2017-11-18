Notes from Logan Cooper

# Beyond ES6

  - ES = ECMAScript -- Standard to control JavaScript
  - `babel-preset-env` can be used to transpile >ES6 without seperate presets.

## ES7 (ES2016)
  Four upgrades to JavaScript:
  1. `Array.prototype.includes()`: lets you look for element in array.
  2. `TypedArray.prototype.includes()`: Same as above, but for TypedArray (Array that can only hold one data type.)
  3. Exponentiation operator: `5 ** 2 => 25`
  4. Destructuring Rest Parameters:
  ```javascript
    function f(...[a, b, c]) {
      return a + b + c;
    }
    f(1) //=> NaN
    f(1, 2, 3) // => 6
    f(1, 2, 3, 4) // => 6
  ```

  Accepted in all browsers but IE.

## ES8

### Objects  
  1. Added `Object.keys()` -- equivalent to `Object.values()`, but returns array of keys.
  2. `Object.entries()` returns a 2D array where the first element of each subarray is a key and the second is the value.
  3. `Object.getOwnPropertyDescriptors()`: Equivalent to `Object#methods` in Ruby.

### Strings
  1. `String.prototype.padEnd()` adds to end of string
  2. `String.prototype.padStart()` adds to start of string
  3. Trailing commas in parameter list: okay in arrays (`[1,2,3,]`) since ever. Okay in Objects since ES5 (`{"a" : 1, "b" : 2,}`). Now it's okay in parameter lists: `function(a, b, c,)`.

### Async/Await
  Async is a syntactic sugar built on top of promises. Promises solved callback hell by letting us chain `.then()`. `async` can be put in front of a function declaration to make the function return a promise. `await` can be used in async functions to make an asynchronous function wait for a certain part to finish before moving on.
  Useful to make a function wait for an API call to return.

  ```javascript
    export const fetchSearchGiphys = searchTerm => async function(dispatch) {
      const data = await APIUtil.fetchSearchGiphys(searchTerm);
      // won't return until data is filled
      return data;
    }
  ```
