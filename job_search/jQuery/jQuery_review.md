### Objects in jQuery
- In basic jQuery, objects are mainly used to provide configuration options. Ex. providing an object to change several CSS properties on an element at once.

```JavaScript
$('#main').css({
  color: 'red',
  border: '1px solid blue'
});
```

- jQuery tends to take control over the meaning of `this`.
- For event handlers, `this` will refer to the element to which you bound the handler. Ex. Iterating over a set of elements in a selection - `this` will refer to the current element in the iteration.
- In jQuery, names that begin with `$` usually refer to jQuery objects.

Source: [jQuery Fundamentals - JS basics](http://jqfundamentals.com/chapter/javascript-basics)

### jQuery Basics:

#### What's `$`?
- The jQuery library provides the `jQuery` function, which lets you select elements using CSS selectors.
- Valid names in JS can be pretty much anything (*unless* they begin with a number and include a hyphen).
- The `$` is just a shorter, more convenient name for the `jQuery function`

```JavaScript
const listItems1 = jQuery('li');
const listItems2 = $('li');
// The two are the same
```

- At the end of the jQuery source code:

```
window.jQuery = window.$ = jQuery;
```

- When you call the $() function and pass a selector to it, a new jQuery object is created.

#### `$(document).ready()`
- `$(document)` creates a jQuery object from the page `document`, then calls `.ready()` on that object, passing it the function to be executed.

```JavaScript
$( document ).ready(function() {
  console.log( 'ready!' );
});
```

- A shorthand method - `$()` function is an alias for `$(document.ready())` if you pass it a function.

```JavaScript
$(function() {
  console.log( 'ready!' );
});
```
