//Insertion Sort
let arr = [9,2,5,8,5,1,7];

for(let i = 1;i < arr.length;i++){
    let key = arr[i];
    let j = i-1;
    while(j >= 0 && arr[j] > key){
        arr[j+1] = arr[j];
        j--
    }
    arr[j+1] = key;

}
console.log(arr);