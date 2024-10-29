//WAP to check a number is prime or not

const prompt = require ('prompt-sync') ({signit: true});
const input = prompt("Enter a number:")

var num=Number(input)
var isprime=true

for(i=2;i<num;i++) {
    if(num%i==0)
        isprime=false
    break;

}

console.log(isprime? "prime number" : "not prime number");
