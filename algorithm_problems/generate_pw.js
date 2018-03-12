// console.log(Math.floor(Math.random() * 26));

const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '1234567890';

function generatePassword(length) {
  const characters = [uppercaseLetters, lowercaseLetters, numbers];
  const results = [];

  while (results.length < length) {
    const key = getRandomNum(characters.length);
    const charList = characters[key];
    const char = characters[getRandomNum(charList.length)];
    results.push(char);
  }

  return results.join('');
}

function getRandomNum(num) {
  return Math.floor(Math.random() * num);
}

console.log(generatePassword(10));
