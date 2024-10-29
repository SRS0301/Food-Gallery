//predict the output
//input     2      3          4              5
//logic1    2*12  3*123     4*1234
//logic2    2+22  3+33+333  4+44+444+4444
//output    24    369        4936             ?


//logic2

const prompt = require('prompt-sync') ({signit:true})
const input = prompt('Enter a number:')

var num=Number(input)
var term =""
var i=1
var sum = 0
while(i<=num){
    term+=num
    sum+=Number(term)
    i++
}

console.log(sum);
