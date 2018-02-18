const splitInteger = function(num, parts) {
  let min = Math.floor(num/parts); // 3
  let diff = num - (parts * min); // 2
  const results = new Array(parts).fill(min);

  for (let i = parts - 1; i > (parts - diff) - 1 ; i --) {
    results[i] += 1;
  }

  return results;
};

console.log(splitInteger(20, 6));
