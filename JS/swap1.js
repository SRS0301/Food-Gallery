//WAP to swap two numbers
//input: x=10 , y=20
//output: x=20 , y=10

//steps: algorithm
//x=x+y     x=30
//y=x-y     y=30-20=10
//x=x-y     x=30-10=20

var x=10
var y=20
console.log(`before swapping x=${x}, y=${y}`);

x=x+y
y=x-y
x=x-y
console.log(`after swapping x=${x}, y=${y}`);

