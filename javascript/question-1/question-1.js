// Question 1: Write a function that takes a string as input and returns the string reversed.

const message = 'Hello world'

function reverseMsg() {
    return message.split('').reverse().join('');
}

console.log(reverseMsg());