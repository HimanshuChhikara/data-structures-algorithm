function checkSorted(arr) {
    // for(let i=1;i<arr.length;i++) {
    //     if(arr[i] < arr[i-1]) {
    //         return false;
    //     }
    // }
    // return true

   let count = 0;

   for(let i=0;i<arr.length;i++) {
    if(arr[i] > arr[i+1]){
        count++
    }
   }
   if(count > 1 || (count == 1 && nums[0] < nums[nums.length-1])) {
    return false;
   }
   return true
}

console.log(checkSorted([2,1]));

