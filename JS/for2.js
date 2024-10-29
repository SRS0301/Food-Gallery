//WAP to print factorial of a number


const prompt = require('prompt-sync') ({signit:true})
const input = prompt('Enter a number:')

var num=Number(input)

var sum=1
for(let i = 1; i <=num; i++) {
    sum*=i
}
console.log(`factorial of ${num} is ${sum}`);

 