//WAP to swap two numbers
//input: x=10 , y=20
//output: x=20 , y=10

//steps: algorithm
//Create a temp variable (temp)
//store value of x into temp variable
//store value of y into x variable
//store value of temp into y variable

var temp
var x=10
var y=20
console.log(` before swapping: x=${x} y=${y}`);
temp =x
x =y
y =temp
console.log(` after swapping: x=${x} y=${y}`);

