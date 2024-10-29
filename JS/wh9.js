//WAP to check a 3 digit no: is armstrong or not

const prompt=require(`prompt-sync`) ({signit:true})
const input = prompt(`Enter a 3 digit number:`)

var num= Number(input)
var sum= 0

while(num>0){
    let lastDigit = num%10
    sum+=lastDigit **3
    num=Math.floor(num/10)
}
console.log(sum);


console.log(input==sum ? "armstrong" : "not armstrong");
