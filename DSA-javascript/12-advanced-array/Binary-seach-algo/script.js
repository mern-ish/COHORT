let arr = [2,4,5,6,7,8,12];

// binarySearch(arr,80);

function binarySearch(arr, target){
    let s = 0, e = arr.length;
    while(s <= e){
        let mid = Math.floor((s + e)/2);
        if(arr[mid]=== target){
            return 1;
        }else if(arr[mid] > target){
            e = mid - 1;
        }else{
            s = mid + 1;
        }
    }
    return -1;
    
}
if(binarySearch(arr,3) === -1){
    console.log("not found");
}else{
    console.log("found");
}