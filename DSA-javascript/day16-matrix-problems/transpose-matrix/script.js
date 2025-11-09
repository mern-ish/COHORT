//Transpose Matrix
//  1 2       1 4
//  4 5       2 5 
const prompt = require("prompt-sync")();
let rows = Number(prompt("enter rows :"));
let cols = Number(prompt("enter cols :"));

let arr = new Array(rows);
for(let i = 0;i<arr.length;i++){
    arr[i] = new Array(cols);
    for(let j =0;j<arr[i].length;j++){
        arr[i][j] = Number(prompt("enter number:"));
    }
}
console.log(arr);


let transArr = new Array(arr[0].length);
for(let i = 0;i<transArr.length;i++){
    transArr[i] = new Array(arr.length);
}
console.log(transArr);  

for(let i = 0;i< transArr.length;i++){
    for(let j = 0;j<transArr[i].length;j++){
        transArr[i][j] = arr[j][i];
    }
}
console.log(transArr);