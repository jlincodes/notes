/*
Given an integer, write a function to determine if it is a power of three.

Follow up:
Could you do it without using any loop / recursion?
*/

const isPowerOfThree = function(n) {
  return ((Math.log10(n) / Math.log10(3)) % 1) === 0;
};

console.log(isPowerOfThree(8));
console.log(isPowerOfThree(27));
console.log(isPowerOfThree(64));
console.log(isPowerOfThree(125));
console.log(isPowerOfThree(216));
