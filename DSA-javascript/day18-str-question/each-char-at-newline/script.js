const prompt = require("prompt-sync")();
let str = prompt("enter the string");

for(let i = 0;i<=str.length-1;i++){
    console.log(str.charAt(i));
}