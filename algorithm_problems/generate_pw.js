// console.log(Math.floor(Math.random() * 26));

const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '1234567890';

function generatePassword(length) {
  const results = [];

  while (results.length < length) {
    let key = Math.floor(Math.random() * 3);
    let letterIdx = Math.floor(Math.random() * 26);
    let numIdx = Math.floor(Math.random() * 10);
    let char;
    switch (key) {
      case 0:
        char = uppercaseLetters[letterIdx];
        break;
      case 1:
        char = lowercaseLetters[letterIdx];
        break;
      case 2:
        char = numbers[numIdx];
        break;
      default:
        break;
    }
    results.push(char);
  }

  return results.join('');
}

console.log(generatePassword(10));
