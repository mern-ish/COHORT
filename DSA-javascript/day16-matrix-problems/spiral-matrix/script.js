//Spiral Matrix

let arr = [[1,2,3,4],[5,6,7,8],[9,10,11,12]];
let top = 0;
let bottom = arr.length -1;
let left = 0;
let right = arr[0].length -1;
let totalElem = right * bottom;
let newArr = [];



while(newArr.length < totalElem){
    for(let i = left;i <= right;i++){
        newArr.push(arr[top][i]);
    }
    top++;
    for(let i = top;i <= bottom;i++){
        newArr.push(arr[i][right]);
    }
    right--;
    
    for(let i = right;i >= left;i--){
        newArr.push(arr[bottom][i]);
    }
    bottom--;
    for(let i = bottom;i >= top;i--){
        newArr.push(arr[i][left])
    }
    left++;
   for(let i = left;i <= right;i++){
    newArr.push(arr[top][i])
   }
   
}
console.log(newArr)


