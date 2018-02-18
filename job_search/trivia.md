# Trivia Questions

## JavaScript

### What is the difference between a variable that is null, undefined, or undeclared?
- Undeclared variable hasn't been declared yet.
- Undefined variable has been declared but has not had a value assigned to it. (ex. `let a;`)
- `null` variable is a declared variable with the value of `null` assigned to it.

Source: [Frontend Interview Questions - The Basics](https://github.com/rlee0525/TechnicalConceptsForInterviews/blob/master/FrontendBasics.md#whats-the-difference-between-a-variable-that-is-null-undefined-or-undeclared)

### What is the difference between `==` and `===`
"... `==` will not check types and `===` will check whether both sides are of same type. So, `==` is tolerant. But under the hood it converts to its convenient type to have both in same type and then do the comparison.

`===` compares the types and values. Hence, if both sides are not same type, answer is always false. For example, if you are comparing two strings, they must have identical character sets. For other primitives (number, boolean) must share the same value.

Rule for implicit coercion: Comparison by using `==` does implicit type conversion under the hood. And rules for implicit coercion are as follows-

If both operands are same type use `===`
undefined `==` null
If one operands is string another is number, convert string to number
If one is boolean and another is non-boolean, convert boolean to number and then perform comparison
While comparing a string or number to an object, try to convert the object to a primitive type and then try to compare
Be careful while comparing objects, identifiers must reference the same objects or same array.

**Special note**: `NaN`, `null` and `undefined` will never `===` another type. `NaN` does not even `===` itself."

Source: [thatjsdude.com - JS: Basics and Tricky Questions](http://www.thatjsdude.com/interview/js2.html#doubleVsTripleEqual)

### Explain the difference between classical inheritance and prototypal inheritance.

The great thing about JavaScript is the ability to do away with the rigid rules of classical inheritance and let objects inherit properties from other objects.

**Classical Inheritance**: A constructor function instantiates an instance via the “new” keyword. This new instance inherits properties from a parent class.

**Prototypal Inheritance**: An instance is created by cloning an existing object that serves as a prototype. This instance—often instantiated using a factory function or “Object.create()”—can benefit from selective inheritance from many different objects.

Source: [15 JavaScript interview questions and answers](https://www.upwork.com/i/interview-questions/javascript/)

### What are prototypes in JavaScript?

"Prototypes are the mechanism by which JavaScript objects inherit features from one another, and they work differently than inheritance mechanisms in classical object-oriented programming languages."

"JavaScript is often described as a **prototype-based language** — each object has a **prototype object**, which acts as a template object that it inherits methods and properties from. An object's prototype object may also have a prototype object, which it inherits methods and properties from, and so on. This is often referred to as a **prototype chain**, and explains why different objects have properties and methods defined on other objects available to them.

Well, to be exact, the properties and methods are defined on the `prototype` property on the Objects' constructor functions, not the object instances themselves."

"...a link is made between the object instance and its prototype (its `__proto__` property, which is derived from the `prototype` property on the constructor), and the properties and methods are found by walking up the chain of prototypes."

Source: [Object Prototypes MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)


### Explain the difference between pass by value and pass by reference.
Primitive type (`null`, `undefined` , `boolean`, `number`, `string` and ES6 `symbol`) are passed by value and objects are passed by reference. If you change a property of the passed object, the change will be affected. However, you assign a new object to the passed object, the changes will not be reflected.

Example:
```JavaScript
var a = 2;        // 'a' hold a copy of the value 2.
var b = a;        // 'b' is always a copy of the value in 'a'
b++;
console.log(a);   // 2
console.log(b);   // 3
var c = [1,2,3];
var d = c;        // 'd' is a reference to the shared value
d.push( 4 );      // Mutates the referenced value (object)
console.log(c);   // [1,2,3,4]
console.log(d);   // [1,2,3,4]
/* Compound values are equal by reference */
var e = [1,2,3,4];
console.log(c === d);  // true
console.log(c === e);  // false
```

Sources:
- [That JS Dude | Pass by value vs by reference](https://thatjsdude.com/interview/js2.html#byValueByRef)
- [freecodecamp | The Definitive JavaScript Handbook for a developer interview](https://medium.freecodecamp.org/the-definitive-javascript-handbook-for-a-developer-interview-44ffc6aeb54e)


### What is the drawback of creating a true private function in JS?
"One of the drawbacks of creating true private methods in JavaScript is that they are very memory-inefficient, as a new copy of the method would be created for each instance."

```JavaScript
var Employee = function (name, company, salary) {
    this.name = name || "";       //Public attribute default value is null
    this.company = company || ""; //Public attribute default value is null
    this.salary = salary || 5000; //Public attribute default value is null

    // Private method
    var increaseSalary = function () {
        this.salary = this.salary + 1000;
    };

    // Public method
    this.displayIncreasedSalary = function() {
        increaseSalary();
        console.log(this.salary);
    };
};

// Create Employee class object
var emp1 = new Employee("John","Pluto",3000);
// Create Employee class object
var emp2 = new Employee("Merry","Pluto",2000);
// Create Employee class object
var emp3 = new Employee("Ren","Pluto",2500);
```
"Here each instance variable `emp1`, `emp2`, `emp3` has its own copy of the increaseSalary private method.

So, as a recommendation, don’t use private methods unless it’s necessary."

Source: [CodeMentor | 21 Essential JavaScript Interview Questions](https://www.codementor.io/nihantanu/21-essential-javascript-tech-interview-practice-questions-answers-du107p62z#what-is-the-drawback-of-creating-true-private-methods-in-javascript)

### Explain the difference between `Function`, `Method` and `Constructor` calls in JavaScript.
"In JavaScript, these are just three different usage patterns of one single construct.

functions : The simplest usages of function call:
```JavaScript
function helloWorld(name) {
  return "hello world, " + name;
}

helloWorld("JS Geeks"); // "hello world JS Geeks"
```
Methods in JavaScript are nothing more than object properties that reference to a function.
```JavaScript
var obj = {
  helloWorld : function() {
    return "hello world, " + this.name;
  },
  name: 'John Carter'
}

obj.helloWorld(); // // "hello world John Carter"
```
Notice how `helloWorld` refer to `this` properties of obj. Here it's clear or you might have already understood that `this` gets bound to `obj`. But the interesting point that we can copy a reference to the same function `helloWorld` in another object and get a difference answer. Let see:
```JavaScript
var obj2 = {
  helloWorld : obj.helloWorld,
  name: 'John Doe'
}
obj2.helloWorld(); // "hello world John Doe"
```
You might be wondering what exactly happens in a method call here. Here we call the expression itself determine the binding of this `this`, The expression `obj2.helloWorld()` looks up the helloWorld property of obj and calls it with receiver object `obj2`.

The third use of functions is as constructors. Like function and method, constructors are defined with function.
```JavaScript
function Employee(name, age) {
  this.name = name;
  this.age = age;
}

var emp1 = new Employee('John Doe', 28);
emp1.name; // "John Doe"
emp1.age; // 28
```
Unlike function calls and method calls, a constructor call `new Employee('John Doe', 28)` create a brand new object and passes it as the value of `this`, and implicitly returns the new object as its result.

The primary role of the constructor function is to initialize the object."

Source: [123 Essential JavaScript Interview Questions](https://github.com/nishant8BITS/123-Essential-JavaScript-Interview-Question#difference-between-function-method-and-constructor-calls-in-javascript)

## Can you describe the main difference between a forEach and a .map() and why you would pick one versus the other?

- "`forEach()` — executes a provided function once for each array element.
- `map()` — creates a new array with the results of calling a provided function on every element in the calling array.""

"The `forEach()` method doesn’t actually return anything (undefined). It simply mutates the current array by calling a provided function on each element in your array.
Meanwhile, the `map()` method will also call a provided function on every element in the array. The difference is that `map()` utilizes return values and actually returns a new Array of the same size."

- `forEach()` is also slower than `map()`
- `map()` may be preferable for functional programming because `map()` does not mutate the original array.
- "`forEach()` may be preferable when you’re not trying to change the data in your array, but instead want to just do something with it — like saving it to a database or logging it out"
- "`map()` might be preferable when changing or altering data. Not only is it faster but it returns a new Array. This means we can do cool things like chaining on other methods ( `map()`, `filter()`, `reduce()`, etc.)"

TL;DR:
- "Just about anything you can do with `forEach()` you can do with `map()`, and vise versa.
- `map()` allocates memory and stores return values. `forEach()` throws away return values and always returns `undefined`.
- `forEach()` will allow a callback function to mutate the current array. `map()` will instead return a new array".

Source: [codeburst.io](https://codeburst.io/javascript-map-vs-foreach-f38111822c0f)

### Explain the difference between function declaration vs. function expression.
"Function declarations begin with the ‘function’ keyword and must be named. We can pass values in the form of arguments and also return values. If a value is not returned, then the function will return undefined."

```JavaScript
function helloWorld() {
  return "hello world";
}
```

Function expressions
```JavaScript
var helloWorld = function() {
  return "hello world";
}
```

"Although function declarations and function expressions are similar and often interchangeable, there is an important distinction:

Function Declarations are hoisted or pulled to the top of the function making them available regardless of position. So, we can call a function and then declare it further down and still access the function.

This may seem confusing since javascript typically interprets code line by line, from top to bottom. Despite this, function and also variable declarations are hoisted by the javascript interpreter while function and variables expressions are not."


**Example:**

Function Declaration:
```JavaScript
function foo() {
  bar();
  function bar() {
    console.log("bar");
  }
}

foo(); // "bar"
```

Function Expression:
```JavaScript
function foo() {
  bar();
  var bar = function() {
    console.log("bar");
  }
}

foo(); // returns "TypeError: bar is not a function"
```

Source: [learnsteady](http://www.learnsteady.com/javascript-function-declaration-vs-expression/)

## How would you empty an array in JS?

### Method 1:
- Reassigns the array variable to an empty array
- Only works for `var` and `let` variables)

```JavaScript
array = []
```
- Recommended only if you don't have references to the original array anywhere else. For example:

```JavaScript
let array = ['a', 'b', 'c', 'd', 'e', 'f']; // Creates array
let anotherArray = array;  // References array by another variable
array = []; // Empties the array
console.log(anotherArray); // Outputs ['a', 'b', 'c', 'd', 'e', 'f']
```

### Method 2:
- Set array length to `0`

```JavaScript
array.length = 0;
```
- Useful for updating all the reference variables that point to the original array. For example:

```JavaScript
const array = ['a', 'b', 'c', 'd', 'e', 'f']; // Creates array
const anotherArray = array;  // References array by another variable
array.length = 0; // Empties the array by setting length to 0
console.log(anotherArray); // Outputs []
```
### Method 3:
- Splice the array starting at index `0` to the length of the array

```JavaScript
arrayList.splice(0, arrayList.length);
```

- Also updates the reference variables that point to the original array:

```JavaScript
const array2 = ['a', 'b', 'c', 'd', 'e', 'f']; // Creates array
const anotherArray2 = array;  // References array by another variable
array2.splice(0, array2.length); // Empties the array by setting length to 0
console.log(anotherArray2); // Outputs []
```

### Method 4:
- Use a `while` loop and `Array.prototype.pop()`
```JavaScript
while (array.length) {
  arrayList.pop();
}
```
- Not recommended

Source: [123 Essential JS Interview Questions](https://github.com/ganqqwerty/123-Essential-JavaScript-Interview-Question#question-6-how-to-empty-an-array-in-javascript)

## What are the ways by which we can create objects in JS?
**Method 1:** `Function Based`

- Useful for creating several similar objects.

```JavaScript
class Cat(name, breed, color, age){
  constructor() {
    this.name = name;
    this.breed = breed;
    this.color = color;
    this.age = age;
  }
}

// Creates multiple object which have similar property but different value assigned to object property.
const breakfast = new Cat('Breakfast', 'Persian', 'white', 3);
const markov = new Cat('Markov', 'Russian Blue', 'grey', 4);
const muffin = new Cat('Muffin', 'Bombay', 'black', 2);

```

**Method 2:** `Object Literal`

- Best way to create an object and is used frequently.

```JavaScript
const breakfast = {
  name: 'Breakfast',
  breed: 'Persian',
  color: 'white',
  age: 3,
  getName: function(){
    return this.name;
  }
}
```

**Method 3:** Using JS `new` keyword

```JavaScript
const breakfast = new Object();
breakfast.name = 'Breakfast';
breakfast.getName = function(){
  return this.name;
}
```

- Note: best practice is to use the object literal method over the `new` keyword method.

Source: [123 Essential JS Interview Questions](https://github.com/ganqqwerty/123-Essential-JavaScript-Interview-Question#question-28-what-are-the-way-by-which-we-can-create-object-in-javascript-)

## How does one prevent a JS object from being modified?
There are three levels of preventing object modification:

**1 - Prevent extensions:** No new properties or methods can be added to the object, but existing properties and methods can be changed.

```JavaScript
const breakfast = {
  name: 'Breakfast'
};

// lock the object
Object.preventExtensions(breakfast);

// Try to change the object property name:
breakfast.name = 'Markov';
console.log(breakfast.name); // => 'Markov'

// Try to add a new object property:
breakfast.age = 3; // fails silently unless in strict mode
```

**2 - Seal:** Performs the same functionality as prevent extension but also prevents existing properties and methods from being deleted.

```JavaScript
const breakfast = {
  name: 'Breakfast'
};

// Seal the object:
Object.seal(breakfast);

console.log(Object.isExtensible(breakfast)); // => false
console.log(Object.isSealed(breakfast)); // => true

delete breakfast.name; // fails silently unless in strict mode

breakfast.age = 3; // fails silently unless in strict mode
```
**3 - Freeze:** Same properties as seal, but also prevent existing properties and methods from being modified (i.e. all properties and method are read-only).

```JavaScript
const breakfast = {
  name: 'Breakfast'
};

// Freeze the object:
Object.freeze(breakfast);

console.log(Object.isExtensible(breakfast)); // => false
console.log(Object.isSealed(breakfast)); // => false
console.log(Object.isFrozen(breakfast)); // => true


breakfast.name = 'Markov'; // fails silently unless in strict mode
breakfast.age = 3; // fails silently unless in strict mode
delete breakfast.name; // fails silently unless in strict mode
```

**Note:** It is recommended to use strict mode if you decided to prevent modification, seal or freeze an object to catch any errors.

Source: [123 Essential JS Interview Questions](https://github.com/ganqqwerty/123-Essential-JavaScript-Interview-Question#question-40-how-we-can-prevent-modification-of-object-in-javascript-)

## Write a function that will test a given string as a literal and as an object.

There are two ways to create a string: Literal and Function-based.

```JavaScript
let literalStr = "literal string";
let objectStr = new String("object string");
```

In the test function, test the literal string using the `typeof` operator and test the `String` object using the `instanceof` operator:

```JavaScript
const isString = (str) => {
  return typeof(str) === 'string' || str instanceof String;
};

// tests

let literalStr = "literal string";
let objectStr = new String("object string");
isString(literalStr); // => true
isString(objectStr); // => true
```

Source: [123 Essential JS Interview Questions](https://github.com/ganqqwerty/123-Essential-JavaScript-Interview-Question#question-45--write-a-function-which-will-test-string-as-a-literal-and-as-an-object-)

## How would you merge two objects?

1. Use `Object.assign()` (ES6):

```JavaScript
const merge = (obj1, obj2) => {
  return Object.assign(obj1, obj2);
};
```

### Follow-up: how could you merge two objects without built-in method.
```JavaScript
const merge = (obj1, obj2) => {
  // both params must be objects
  if (typeof obj1 === 'object' && typeof obj2 === 'object') {
    for (let prop in obj2) {
      // only merge if obj2's property ('prop') is its own && not inherited
      if (obj2.hasOwnProperty(prop)) {
        obj1[prop] = obj2[prop];
      }
    }
    return obj1;
  } else {
    throw 'merge will only work with two objects';
  }
};

let obj1 = { name: 'Julie'};
let obj2 = { age: 27 };

// Tests:
// console.log('Object.assign method', Object.assign(obj1, obj2));
// console.log('merge function', merge(obj1, obj2));
```

Source: [123 Essential JS Interview Questions](https://github.com/ganqqwerty/123-Essential-JavaScript-Interview-Question#question-48-write-code-for-merge-two-javascript-object-dynamically)
