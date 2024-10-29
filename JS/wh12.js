//Display all numbers whose exponent is in the range of 8 & 36

const prompt = require('prompt-sync') ({signit:true})
const input = prompt('Enter a number:')

var exp=Number(input)
var i =1
const up=36
const low=8
var a=0

while(i<=up){
    a=i**exp
    
    if(a>= low && a<= up){
        console.log(i);
        
    }
    i++
}