//Rotate image 90 = transpose + reverse array
let arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
for(let i  = 0;i < arr.length;i++){
    for(let j = 0;j < arr[i].length;j++){
        process.stdout.write(` ${arr[i][j]} `);
    }
    console.log();
}
// console.log(arr);

//transpose

for(let i = 0;i < arr.length;i++){
    for(let j = i;j<arr[i].length;j++){
        let temp = arr[i][j];
        arr[i][j] = arr[j][i];
        arr[j][i] = temp;
    }
}
console.log(arr);

//reverse 

for(let i = 0;i < arr.length;i++){
   
        let s = 0;
        let e = arr[i].length-1;
        while(s<=e){
            let temp = arr[i][s];
            arr[i][s] = arr[i][e];
            arr[i][e] = temp;
            s++;
            e--;            

        }
    
}

for(let i  = 0;i < arr.length;i++){
    for(let j = 0;j < arr[i].length;j++){
        process.stdout.write(` ${arr[i][j]} `);
    }
    console.log();
}