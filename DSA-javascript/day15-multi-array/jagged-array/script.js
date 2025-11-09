//jagged-array
const prompt = require("prompt-sync")();
let rows = Number(prompt("enter the rows"));
let arr = new Array(rows);
for(let i = 0;i < arr.length;i++){
    let cols = Number(prompt("enter the columns:"));
    arr[i] = new Array(cols).fill(9);

}
console.log(arr)