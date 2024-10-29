//WAP to display largest among two numbers

const a=100
const b=20
if(a>b){
    console.log(`${a} > ${b}`);
    
}
else if(b>a){
    console.log(`${b} > ${a}`);
    
}
else{
    console.log(`${a} = ${b}`);

}

console.log(a> b ? "a is Greater" : b>a ? "b is Greater" : "Equal numbers");
