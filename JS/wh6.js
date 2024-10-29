//WAP to find factotial of a number

const prompt= require (`prompt-sync`) ({signit:true})
const input= prompt('Enter a number:')

var num= Number(input)
var fact=1
while(num>0){
    fact*=num
    num--
}
console.log(`factorial of ${input} is ${fact}`);




