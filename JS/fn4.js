//WAP to check a number is even or odd

// function numcheck(num){
//     return num%2==0 ? "even" : "odd";
// }
// console.log(`num is : ${numcheck(34)}`);

var numcheck = num=> num%2==0 ? "even" : "odd"; //one arg only so paranthesis is neccessary
    
console.log(`num is : ${numcheck(34)}`);
