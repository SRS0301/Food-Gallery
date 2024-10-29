//WAP to print second largest number among 3 unique numbers and print them in ascending order

let num1=50 , num2=20 , num3=100

if(num1>num2 && num1>num3)
    //num1 is largest
    {
        if(num2>num3){
            console.log(`${num2} is the second largest`);
            console.log(`ascending order is ${num3} > ${num2} > ${num1}`);
            
            }
        else{
                console.log(`${num3} is the second largest`);
                console.log(`ascending order is ${num2} > ${num3} > ${num1}`);
                
            }
}

if(num2>num1 && num2>num3)
    //num2 is largest
    {
        if(num1>num3){
            console.log(`${num1} is the second largest`);
            console.log(`ascending order is ${num3} > ${num1} > ${num2}`);
            
            }
        else{
                console.log(`${num3} is the second largest`);
                console.log(`ascending order is ${num1} > ${num3} > ${num2}`);
                
            }
}
if(num3>num1 && num3>num2)
    //num3 is largest

    {
        if(num1>num2){
            console.log(`${num1} is the second largest`);
            console.log(`ascending order is ${num2} > ${num1} > ${num3}`);
            
            }
        else{
                console.log(`${num2} is the second largest`);
                console.log(`ascending order is ${num1} > ${num2} > ${num3}`);
                
            }

}