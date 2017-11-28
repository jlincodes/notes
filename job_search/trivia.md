# Trivia Questions

## JavaScript

#### Explain the difference between classical inheritance and prototypal inheritance.

The great thing about JavaScript is the ability to do away with the rigid rules of classical inheritance and let objects inherit properties from other objects.

**Classical Inheritance**: A constructor function instantiates an instance via the “new” keyword. This new instance inherits properties from a parent class.

**Prototypal Inheritance**: An instance is created by cloning an existing object that serves as a prototype. This instance—often instantiated using a factory function or “Object.create()”—can benefit from selective inheritance from many different objects.

Source: [15 JavaScript interview questions and answers](https://www.upwork.com/i/interview-questions/javascript/)

#### What are prototypes in JavaScript?

"Prototypes are the mechanism by which JavaScript objects inherit features from one another, and they work differently than inheritance mechanisms in classical object-oriented programming languages."

"JavaScript is often described as a **prototype-based language** — each object has a **prototype object**, which acts as a template object that it inherits methods and properties from. An object's prototype object may also have a prototype object, which it inherits methods and properties from, and so on. This is often referred to as a **prototype chain**, and explains why different objects have properties and methods defined on other objects available to them.

Well, to be exact, the properties and methods are defined on the `prototype` property on the Objects' constructor functions, not the object instances themselves."

"...a link is made between the object instance and its prototype (its `__proto__` property, which is derived from the `prototype` property on the constructor), and the properties and methods are found by walking up the chain of prototypes."

Source: [Object Prototypes MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)
