const prompt = require("prompt-sync")();

let str = prompt("enter string : ");

for(let i = str.length-1;i>=0;i--){
    console.log(str.charAt(i));
}