//predict the output
//input     2      3          4              5
//logic1    2*12  3*123     4*1234
//logic2    2+22  3+33+333  4+44+444+4444
//output    24    369        4936             ?  

//logic1

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
