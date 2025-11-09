
let arr = [
    [1,2],[3,5]
]
let leftWingSum = 0;
let ringtWingSum = 0;

for(let i = 0;i<arr.length;i++){
    for(let j =0;j<arr[i].length;j++){
        // process.stdout.write(  ` ${arr[i][j]} `)
        if(i == j){
            leftWingSum = leftWingSum + arr[i][j];
        }
        if(i + j == arr.length-1){
            ringtWingSum = ringtWingSum + arr[i][j];
        }

    }
   
}
console.log(leftWingSum);
console.log(ringtWingSum);