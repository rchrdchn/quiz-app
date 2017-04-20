// 1) Create an array with 5 different strings.
// Log the length of your array, and log the length
// of each of the strings in your array.
// When done, reverse your array: permanently or temporarily
// - your choice.

// var array = ["uno", "dos", "tres", "cuatro", "cinco"];

// console.log(array.length);

// for (i = 0; i < array.length; i++) {
// 	console.log(array[i]);
// }

// console.log(array.reverse());


// 2) Create an array of at least 5 numbers.
// Sort the array numerically, in ascending order
// (smallest to biggest). Then sort it in descending order.

// var numbers = [50, 10, 30, 40, 80];

// console.log(numbers.sort());

// console.log(numbers.sort().reverse());


// 3) Create an array of strings. Add two new strings to the array,
// then take one away. Console log the final array - it should have
// four strings.

var strings = ["tengo hambre", "tengo comida", "tengo dinero"];

var pushString = strings.push("tengo todo");

var pushingMore = strings.push("tengo mas");

var takingAway = strings.pop();

console.log(strings);

