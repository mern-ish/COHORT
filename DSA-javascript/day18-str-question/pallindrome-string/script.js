const prompt = require("prompt-sync")();

let str = prompt("enter a string :");
let pallindrome = true;
let i = 0, j=str.length-1;


while(i<j){
    if(str[i] != str[j]){
        pallindrome = false;
        break;
    }
    i++;
    j--;
}

if(pallindrome) {
    console.log("pallindrome")
}else{

    console.log("NOt pallindrome")
}






