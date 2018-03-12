// console.log(Math.floor(Math.random() * 26));

const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '1234567890';

function generatePassword(length) {
  const characters = [uppercaseLetters, lowercaseLetters, numbers];
  const results = [];

  // Using a while loop
  // drawback of using a while loop: infinite loop if one omitted results.push(char)

  // while (results.length < length) {
  //   const key = getRandomNum(characters.length);
  //   const charList = characters[key];
  //   const char = charList[getRandomNum(charList.length)];
  //   results.push(char);
  // }

  // Using a for loop

  for (let i = 0; i < length; i++) {
    const key = getRandomNum(characters.length);
    const charList = characters[key];
    const char = charList[getRandomNum(charList.length)];
    results.push(char);
  }

  return results.join('');

  // using Array.prototype.map

  // return new Array(length).fill(null).map(() => {
  //   const key = getRandomNum(characters.length);
  //   const charList = characters[key];
  //   return charList[getRandomNum(charList.length)];
  // }).join('');
}

function getRandomNum(num) {
  return Math.floor(Math.random() * num);
}

console.log(generatePassword(10));
