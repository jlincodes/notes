/*
Write a function that converts the time from AM/PM format to military time.

Example:

"07:45:20PM" => "19:45:20"

*/

const convertTime = (s) => {
	const result = s.split('');
  if (result[result.length - 2].toUpperCase() === "P") {
  	let hour = parseInt(result.slice(0,2).join(''));
    hour += 12;
    hour = hour.toString().split('');
    [result[0], result[1]] = [hour[0], hour[1]]
  }
  result.splice(result.length - 2, 2)
  return result.join('');
}
