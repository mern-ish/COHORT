let arr = ["attention","ractive","atitude","attend","attribute","alexa",];

let pre = "at";
let count = 0;
for(let i = 0; i <= arr.length-1;i++){
    let check = arr[i].startsWith(pre);
    if(check) count  ++;
}
console.log(count);
