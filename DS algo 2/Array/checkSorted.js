function checkSorted(nums) {
    // for(let i=1;i<arr.length;i++) {
    //     if(arr[i] < arr[i-1]) {
    //         return false;
    //     }
    // }
    // return true

    let count = 0
    let length = nums.length;

    if(nums[0] < nums[length -1]) count++

    for(let i=0;i<length -1;i++) {
        if(nums[i] > nums[i+1]) {
            count++
        }
        if(count > 1) {
            return false
        }
    }
    return true
}

console.log(checkSorted([2,1,3,4]));

