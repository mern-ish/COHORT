//Bubble sort

let arr = [7,9,2,3,6,4,1];
let count = 0, innercounter = 0;
let n = arr.length;
for(let i = 0;i<n-1;i++){
    for(let j = 0;j < n - i - 1;j++ ){
        if(arr[j] > arr[j+1]){
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
        innercounter++;
    }
    count++
}

console.log(arr);
console.log(count)
console.log(innercounter)