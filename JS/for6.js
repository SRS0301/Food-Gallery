//WAP to find the GDC/HCF of 2 numbers

const prompt = require ('prompt-sync') ({signit: true});
const input1 = prompt("Enter first number:")
const input2 = prompt("Enter second number:")

num1=Number(input1)
num2=Number(input2)

var gcd=1

if(num1>num2){
    for(i=1; i<=num1; i++){

        if(num1%i==0 && num2%i==0){
            gcd=i
        }
        
    }
    console.log(`GCD of ${num1} and ${num2} is ${gcd}`);

}
    if(num2>num1){
        for(i=1; i<=num2; i++){
    
            if(num1%i==0 && num2%i==0){
                gcd=i
            }
            
        }
        console.log(`GCD of ${num1} and ${num2} is ${gcd}`);

}




