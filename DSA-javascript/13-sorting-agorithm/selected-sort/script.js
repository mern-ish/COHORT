//selected sort

let arr = [9,2,8,3,74,2,1,5];

for(let i = 0;i < arr.length-1;i++){
    let small = i;
    for(let j = i+1;j < arr.length;j++){
        if(arr[small] > arr[j]){
            small = j;

        }
    }
    
    if(i != small){
        let temp = arr[i];
        arr[i] = arr[small];
        arr[small] = temp;
    }
}
console.log(arr);