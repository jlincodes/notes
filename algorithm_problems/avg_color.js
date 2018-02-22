function avgColor(color1, color2) {
  // declare an empty results array to store the r, g, b values
  const arr = [];

  // declare temporary variables that will later be defined inside the for loop
  let temp1;
  let temp2;
  let avg;

  // iterate over both color hexadecimal strings 3 times simultaneously
  for (let i = 0; i < color1.length; i += 2) {
    // define temporary variables
    // use parseInt() base 16 to convert the string into an integer
    temp1 = parseInt(color1.substr(i,2), 16);
    temp2 = parseInt(color2.substr(i,2), 16);
    // Use Math.ceil to round up to the nearest integer
    // Use toString() base 16 to convert the average integer into a string
    avg = Math.ceil((temp1 + temp2)/2).toString(16);

    // if the avg of the two colors is 0, add an extra 0 to the avg string
    // to retain the two character format for the r, g, or b value
    if (avg.toString(16).length === 1) {
        avg += "0";
    }

    // push the avg into the results array
    arr.push(avg);
  }

  // join the 3 string elements from the results array and return array
  return arr.join('');
}

console.log(avgColor('FFFFFF', '000000'));
console.log(avgColor('FF0000', '3300FF'));
