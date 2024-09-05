// Question 4 - Write a function that removes all spaces from a given string.

const text = ' Hello World! Welcome '
const result = text.replace(/\s+/g, '')

console.log(result);