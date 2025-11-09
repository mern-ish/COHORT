//Toggle String

const prompt = require("prompt-sync")();
let s = prompt("enter anything : ");
let ans = ""


for(let i = 0; i <= s.length-1; i++){
     let char = s.charCodeAt(i)
    

    if(char >= 65 && char <= 90){
        ans = ans + String.fromCharCode(char + 32);
    }else if(char >= 97 && char <= 122){
        ans = ans + String.fromCharCode(char - 32);
    }else{
        
    }
    
}
console.log(s)
console.log(ans)





//ascii code
// A - 65
// Z - 90
// a - 97
// z - 122