//WAP to check if a number is palindrome or not

const prompt =require(`prompt-sync`) ({signit: true})
const input = prompt(`Enter a number :`)

var num = Number(input)
var numreverse= ''

while (num>0){
    let lastdigit = num%10
    numreverse+= lastdigit
    num= Math.floor(num/10)
}
console.log(`the reverse of ${input} is `,numreverse);

console.log(input==numreverse ? "palindrome" : "not palindrome");
