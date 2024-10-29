//pattern

//          *
//       *     *
//     *    *    *
//   *    *    *    *

const prompt = require ('prompt-sync') ({signit: true});
const input1 = prompt("Enter first number:")

var n=input1  // Number of rows

for (let row = 1; row <= n; row++) {
    let rowcontent = '';

    // Print spaces before the first *
    for(let space=n;space>=row;space--){
        rowcontent += ' '

    }

    // Print stars with spaces between them
    for (let col = 1; col <= row; col++) {
        rowcontent += ' * ';
       
    }

    // Print the row
    console.log(rowcontent);
}
