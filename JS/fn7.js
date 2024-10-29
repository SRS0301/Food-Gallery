const global ='global variable'

const parentFun=()=>{
    const parent='parent variable'
    console.log(`inside function, parent is ${parent} and global variable is ${global}` );
    return()=>{
        const child='child variable'
        console.log(`Child function,  child is ${child} , parent is ${parent} and global variable is ${global}`);
        
    }
    
}
//parentFun()()
const child = parentFun()
child()