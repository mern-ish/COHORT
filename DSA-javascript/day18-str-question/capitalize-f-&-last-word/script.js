//Capitalize first and last character of a string

let str = "Hello my name is manish kumar singh";

let arrStr = str.split(" ");

let ans = "";

for(let i = 0; i <= arrStr.length-1;i++){

    let word = arrStr[i];

    if(word.length == 2) ans += word.toUpperCase() + " ";
    else{
        ans = ans + word.charAt(0).toUpperCase() + "" 
                  + word.substring(1,word.length-1) + ""
                  + word.charAt(word.length-1).toUpperCase() + " ";

    }

    
}
console.log(ans);

