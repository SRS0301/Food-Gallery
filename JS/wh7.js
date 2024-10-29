//WAP to find reverse of a number

const prompt = require('prompt-sync')({signit: true});
const input = prompt('Enter a number: ');

var num = Number(input);
var i = 1;
var str = "";

while (i <= num) {
    str += i;  // Concatenate the numbers
    i++;
}

var concatenatedNumber = Number(str);  // Convert the concatenated string to a number

// Multiply the original number by the concatenated number
console.log(`Result: ${num * concatenatedNumber}`);

