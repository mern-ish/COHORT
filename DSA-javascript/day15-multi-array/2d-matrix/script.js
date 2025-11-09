//Multi- array
// let arr = [[1,3,4,5,6],[9,7,5,4,3],[3,4,2,6,4]];
// // console.log(arr);

// for(let i = 0;i<arr.length;i++){
//     for(let j = 0;j<arr[i].length;j++){
//         process.stdout.write(` ${arr[i][j]} `)
//     }
//     console.log();
// }

//Dynamic
//2-D array
// const prompt = require("prompt-sync")();
// let row = Number(prompt("Enter the row size : "));
// let arr = new Array(row);
// let column = Number(prompt("Enter the colcum size : "));

// //space creating
// for(let i = 0;i < arr.length;i++){
//     arr[i] = new Array(column);    
// }
// console.log(arr);

// //enter the element
// for(let i = 0;i < arr.length;i++){
//     for(let j = 0;j < arr[i].length;j++){
//         arr[i][j] = Number(prompt("enter element:"));
//     }
// }
// console.log(arr);

// //traverse the data 

// for(let i = 0;i<arr.length;i++){
//     for(let j = 0;j <arr[i].length;j++){
//         process.stdout.write(` ${arr[i][j]} `);
//     }
//     console.log();
// }


//3D array

// creating space && inserting elem
// const prompt = require("prompt-sync")();

// let row = Number(prompt("enter row : "));
// let column = Number(prompt("enter column : "));
// let depth = Number(prompt("enter depth : "));

// let arr = new Array(row);

// for(let i = 0;i<arr.length;i++){
//     arr[i] = new Array(row);
//     for(let j = 0;j < arr[i].length;j++){
//         arr[i][j] = new Array(column);
//         for(let k = 0;k < arr[i][j].length;k++){
//             arr[i][j][k] = new Array(depth);
//             arr[i][j][k] = prompt("enter numbr")
//         }
//     }
// }
// console.log(arr);


