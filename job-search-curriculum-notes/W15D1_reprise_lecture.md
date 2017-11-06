# Reprise Lecture

## Learning goals:
- Be able to answer the following questions:
  - have i declared variables properly
  - do i have access to variables in a particular scope
  - what does `this` reference
  - do i have semi-colons in the right places
  - am i invoking this function correctly? do i need to be invoking it?

## overview
- Data types
- Style & syntax
- Objects
- Functions


## JS data types:
- Primitives
  - Booleans
  - Null
  - Undefined
  - Number
  - String
  - Symbol (new in ES6)
- Objects

## JS has 7 falsey values:
- `undefined`, `null`, `NaN`, 0, -0, "", false
- use `===` and `!===`
- avoids tricky and unreliable type conversion with `==`
  - ex. `"0" == 0` => `true`

## instanceof vs typeof
```JavaScript
function Cat() {}
const cat = new Cat();
cat instanceof Cat // => true
typeof cat //=> 'object'
typeof "this is a string" //=> 'string'
```

## Style and Syntax

- You must use explicit returns
  - unless single-lined fat-arrows functions
- you must use parentheses in if, loops, and functions calls and declarations
- declare all variables
- use camelCase variable names
- end all expressions with semi-colons (mainly assignments and function calls)

## Objects
- can be used like a ruby hash
- also known as Plain Old JavaScript Objects or POJOs
- can have functions as values
- can access object attributes with `[]` or `.`
  -  can only use `.` if attribute name begins with alphanumeric character, `$`, or `_`
- Object assignment shorthand:

```JavaScript
const cat = {
  name: "Tiger",
  meow() {
    console.log("Mrwar!");
  },
  posterPhrase: function () {
    console.log("Hang in there.");
  },
};
```

Constructor Functions (review)
- we use constructor functions to create new objects
- when the constructor is called with `new` keyword, `this` is set to a blank object and the `__proto__` property is assigned to the constructor's prototype
- instance methods are added to the prototype of an object
- equivalent of Ruby class methods are called static methods

```JavaScript
const Cat = function(name) {
  this.name = name;
}

const kitty = new Cat("kitty");

Cat.prototype.meow = function () {
  console.log(`${this.name} says: MEOW`);
}

let felix = new Cat('Felix')
felix.meow() // => Felix says: MEOW

```
- If a method is not present on an object, it will look at the `__proto__`.
- If a method is not on the `__proto__` (constructor's prototype), it will look at the constructor's `__proto__`.


## Make a Constructor Function:
```JavaScript
const Foo = function Foo(a, b) {
  this.aProperty = a;
  this.bProperty = b;
}

const bar = new Foo("apple", "bannana");
```

`this` is:

## Function
- functions are first-class objects
  - can be passed to a function as an argument
  - can be returned by another function
  - stored in a variable
  - stored in a data structure
- common to pass functions to other functions
- can use anonymous functions as arguments, like blocks in Ruby
- parentheses are required to invoke functions

## Ways to invoke a function
- function style
- method style
- constructor style

## Variables and Scope:
- 3 main ways to declare variables in JS (`let`, `const`, and `var`)
- `let` and `const` (ES6) are block-scoped
- always use const, unless you have to use let
- var is function scoped, so __don't use it!__


```JavaScript
function timeMe() {
  for (var i = 0; i < 4; i++) {
    setTimeout(() => console.log(i), 1000;)
  }
}

timeMe() // => 4, 4, 4, 4

function betterTimeMe() {
  for (let i = 0; i < 4; i++) {
    setTimeout(() => console.log(i), 1000;)
  }
}

betterTimeMe() // => 0, 1, 2, 3
```

## Do not create global variables

## Score: What variables are accessible in a given place in code
- arguments
- local variables
- variables declared in an outer scope when the function was first defined

## `this`
- like Ruby's `self`
- not implicit
- value of `this` referred to as the function's __Context__
- if a function is invoked on an instance object, `this` is set as that instance
- `this` can be tricky. Luckily, we have `bind`

## Global Scope
- avoid making global variables
- watch out for accidental globals
- global variables becomes properties of global object
- `window` or `global` (unless using strict)

## Closures
- a function which access variables that were neither passed in nor defined in that function
  - free variables: variables neither declared, nor passed as arguments to a function.
  - a closure is a function that captures free variables and 'closes' over them.
  - used to create private state
  - are formed when a function is defined, not when it is invoked

## Callbacks
- function that is passed into another function
- can be as simple as passing a function to `forEach`
- can also be used with setTimeout method or readline library
  - setTimeout runs a callback after a certain period of time
  - readline gets user input and passes it to a callback
- we'll use callbacks for timers, to retrieve data from the server, events

## Debugging
- Be able to answer the following questions when debugging:
  - Have I declared variables properly?
  - Do I have access to variables in a particular scope?
  - What does this reference?
  - Am I returning values?
  - Do I have semicolons in the right places?
  - Am I invoking this function correctly? Do I need to be invoking it?

## ES5 vs ES6
- new in ES6:
  - variable declaration: `var` vs. `let` and `const`
  - string interpolation `console.log(`Hello ${name}`)`
  - array destructuring: `const [x, y] = [1, 2]`
  - object destructuring: `const {x, z} = {x: 1, y: 2, z: 3}`
  - property declaration
  - functions
  - default arguments
  - multiple arguments: `const foo = (...array) => {}`
  - classes

```JavaScript

class Users {
  constructor {
    // bind here
  }
  handleSubmit() {
    console.log(this); // this is referring the the event being handled unless handleSubmit is bound to the instance of User class using bind in the constructor
  }

  handleSubmit = () => {
    console.log(this); // this is referring to the instance of User class
  }

}
```
