function searchRange(nums,target) {
    let res = -1;
    let low = 0;
    let high = nums.length - 1;

    while(low <= high) {
        let mid = Math.floor((low + high) / 2);

        if(nums[mid] === target) {
            res = mid
        }
        else if(nums[mid] > target) {
            high = mid-1;
        }
        else {
            low = mid + 1;
        }
        
    }
    
    return res;
}

console.log(searchRange([5,7,7,8,8,10],8));