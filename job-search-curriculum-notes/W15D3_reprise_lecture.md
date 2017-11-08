# Reprise Lecture: Vanilla JS, jQuery, AJAX

## W6D1

### DOM - Coument Object Model
- root node of DOM elements tree

### Overview of jQuery

### jQuery Pros and Cons
- Pros:
- Cons:
  - limits potential
  - large library (jQuery file need)

### Way to use jQuery
- Selector-style
- HTML-style
- Wrapper-style
- Ready-style

### Selector-style
- input: css selector as a string
- output: jQuery object (array-like) containing all elements that match the selector
- example: $('.li.someClass')

### HTML-style
- example: $('<li class=someClass><li>')

### Wrapper-style

### Ready-style
- $(() => alert('DOM is fully loaded'))

### DOMContentloaded vs on load
- Render-tree construction developers.google.com

### Async Await
- async await - es8 feature
```JavaScript
async function x() {
  let result = await y();
  return result
}

async function y() {
  return dispatch();
}

// the above is the equivalent of the below

y().then(result => x());
```
- cleaner way to write promises


### Events:


## W6D3: AJAX
- Rails MVC - still all relevant, just tweaking the views
- Past: server-side rendering of html & ERB (web pages)
- Future: Client side rendering of html & JSON (web service)
- What is code-splitting?

### Microservices
- What are web services?
  - web pages - render html
  - web service - typically data
- monolithic codebase
  - ex. yelp
- microservices
  - Amazon uses microservices
- serverless services - misnomer, not actually serverless; it's just a bunch of microservices
- hypernova - AirBnB library

### Virtual DOM vs. Actual DOM
- diffing algorithm
- reconciliation

### AJAX
- Asynchronous Javascript A and XML
- Updates webpage without reloading all of the webpage
- Sendings HTTP requests and receives responses in the background
- Single-page Application (SPA) + Wed API
- Stay away from AJAX
  - Instead, use another library like axios or fetch


### AJAX Fundamentals
- only key required is URL
- possible dataTypes: xml, html, script, json

### Promises
- Async await (ES8) is better

### Watch:
- Netflix JS talks: RxJS + Redux + React = Amazing!

## W6D4

### Event
- 1. `event delegation` pattern of installing a single event handler on a parent element to catch events o its children
- 2. event `propagation`: after an event triggers on the deepest possible element, it then triggers on its parents in nesting order - aka the `bubbling principle`
- capture phase, target phase, bubble phase
- `event.stopPropagation()` stops bubbling

#### sidenote
- `target`
- `currentTarget`
  - vanilla: someElement.dispatchEvent(event)
  - jQuery: $el.trigger(event)

#### Tangent: info security conferences
- BlackHat
- DEF CON
- Writing scripts to make tasks easier; but beware of those scripts having detrimental consequences
- Ruby is well-known for hacking

### Document

### History
- `history` returns JS object that provides an interface for manipulating the browser session history
- think of `history` as a stack
  - `history.back()`
  - `history.forward()`
  - alternatively `history.go(int)` where int can be negative or positive

#### Tangent2:
- JS numbers: max num of decimals is 17
- JS numbers are always 64-bit floating point

### Location
- `location` returns a JS object that is an interface for manipulating the window's location
